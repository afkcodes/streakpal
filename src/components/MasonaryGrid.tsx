import React, { Fragment, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface MasonryGridProps {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
  numColumns?: number;
  containerStyle?: ViewStyle;
  scrollDuration?: number;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({
  data,
  renderItem,
  numColumns = 2,
  containerStyle,
  scrollDuration = 50000,
}) => {
  const [columns, setColumns] = useState<any[][]>(
    Array.from({ length: numColumns }, () => [])
  );
  const [contentHeight, setContentHeight] = useState(0);
  const scrollY = useSharedValue(0);
  const isResetNeeded = useSharedValue(false);

  useEffect(() => {
    const columnData = Array.from({ length: numColumns }, () => []);
    const tripleData = [...data, ...data, ...data]; // Triple the data for seamless looping
    tripleData.forEach((item, index) => {
      const columnIndex = index % numColumns;
      const sectionIndex = Math.floor(index / data.length);
      columnData[columnIndex].push({
        ...item,
        uniqueKey: `${item.id}-${sectionIndex}-${columnIndex}`, // Ensure unique keys
      });
    });
    setColumns(columnData);
  }, [data, numColumns]);

  useEffect(() => {
    if (contentHeight > 0) {
      scrollY.value = 0;
      scrollY.value = withRepeat(
        withTiming(-contentHeight / 3, {
          duration: scrollDuration,
          easing: Easing.linear,
        }),
        -1,
        false
      );
    }
  }, [contentHeight, scrollDuration]);

  useAnimatedReaction(
    () => {
      return scrollY.value < -contentHeight / 3;
    },
    (shouldReset) => {
      if (shouldReset) {
        isResetNeeded.value = true;
      }
    },
    [contentHeight]
  );

  const animatedStyle = useAnimatedStyle(() => {
    if (isResetNeeded.value) {
      scrollY.value = scrollY.value + contentHeight / 3;
      isResetNeeded.value = false;
    }
    return {
      transform: [{ translateY: scrollY.value }],
    };
  });

  const onLayout = (event: { nativeEvent: { layout: { height: number } } }) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View style={[styles.masonryContainer, animatedStyle]} onLayout={onLayout}>
        {columns.map((column, columnIndex) => (
          <View
            key={`column-${columnIndex}`}
            style={[
              styles.column,
              { width: SCREEN_WIDTH / numColumns - 4 }, // Subtract padding
            ]}>
            {column.map((item: any) => (
              <Fragment key={item.uniqueKey}>
                {renderItem({ ...item, key: item.uniqueKey })}
              </Fragment>
            ))}
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  masonryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
  },
  column: {
    paddingHorizontal: 2,
  },
});

export default MasonryGrid;
