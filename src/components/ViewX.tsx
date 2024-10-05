import React, { useMemo } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';
import { Theme } from '../types/theme.type';

type ViewXProps = ViewProps &
  ViewStyle & {
    children?: React.ReactNode;
    themeOverride?: Theme;
  };

const ViewX: React.FC<ViewXProps> = React.memo((props) => {
  const { children, themeOverride, style, ...restProps } = props;

  const { theme } = useTheme();

  const activeTheme = themeOverride || theme;

  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      backgroundColor: themes[activeTheme]?.background?.primary || 'transparent',
    };

    const propsStyle = Object.keys(restProps).reduce((acc, key) => {
      if (key in StyleSheet.flatten({})) {
        acc[key] = restProps[key];
        delete restProps[key];
      }
      return acc;
    }, {} as ViewStyle);

    return StyleSheet.flatten([baseStyle, propsStyle, style]);
  }, [activeTheme, theme, restProps, style]);

  if (!themes[activeTheme]) {
    console.warn(`Theme "${activeTheme}" not found. Falling back to default styles.`);
    return (
      <View style={memoizedStyle} {...restProps}>
        {children}
      </View>
    );
  }

  return (
    <View style={memoizedStyle} {...restProps}>
      {children}
    </View>
  );
});

ViewX.displayName = 'ViewX';

export default ViewX;
