import React, { useMemo } from 'react';
import { Pressable, PressableProps, StyleSheet, ViewStyle } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';
import { Theme } from '../types/theme.type';

type PressableXProps = PressableProps &
  ViewStyle & {
    children?: React.ReactNode;
    themeOverride?: Theme;
  };

const PressableX: React.FC<PressableXProps> = React.memo((props) => {
  const { children, themeOverride, style, ...restProps } = props;

  const { theme } = useTheme();

  const activeTheme = themeOverride || theme;

  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      backgroundColor: themes[activeTheme]?.background?.transparent || 'transparent',
    };

    const propsStyle = Object.keys(restProps).reduce((acc, key) => {
      if (key in StyleSheet.flatten({} as ViewStyle)) {
        acc[key] = restProps[key];
        delete restProps[key];
      }
      return acc;
    }, {} as ViewStyle);

    return StyleSheet.flatten([baseStyle, propsStyle, style]);
  }, [activeTheme, theme, restProps, style]);

  if (!themes[activeTheme]) {
    console.warn(`Theme "${activeTheme}" not found. Falling back to default styles.`);
  }

  return (
    <Pressable style={memoizedStyle} {...restProps}>
      {({ pressed }) => {
        if (typeof children === 'function') {
          return children({ pressed });
        }
        return children;
      }}
    </Pressable>
  );
});

PressableX.displayName = 'PressableX';

export default PressableX;
