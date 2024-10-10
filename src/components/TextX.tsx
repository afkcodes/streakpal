import React, { useMemo } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';
import { FontSize, FontWeight } from '../types/component.types';
import { Theme } from '../types/theme.type';

type TextXProps = Omit<TextProps & TextStyle, 'fontSize' | 'fontWeight' | 'color'> & {
  children?: React.ReactNode;
  themeOverride?: Theme;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: 'primary' | 'accent' | 'secondary' | 'tertiary';
};

const TextX: React.FC<TextXProps> = React.memo((props) => {
  const {
    children,
    themeOverride,
    style,
    fontSize = 'md',
    fontWeight = 'regular',
    color = 'primary',
    ...restProps
  } = props;

  const { theme } = useTheme();

  const activeTheme = themeOverride || theme;

  const memoizedStyle = useMemo(() => {
    const baseStyle: TextStyle = {
      color: themes[activeTheme]?.text[color] || 'black',
      fontSize:
        themes[activeTheme]?.typography?.fontSizes?.[fontSize] ||
        themes[activeTheme]?.typography?.fontSizes?.base,
      fontFamily: themes[activeTheme]?.typography?.fontFamily?.[fontWeight] || undefined,
      lineHeight: themes[activeTheme]?.typography?.lineHeights?.[fontSize] || undefined,
    };

    const propsStyle = Object.keys(restProps).reduce((acc, key) => {
      if (key in StyleSheet.flatten({} as TextStyle)) {
        acc[key] = restProps[key];
        delete restProps[key];
      }
      return acc;
    }, {} as TextStyle);

    return StyleSheet.flatten([baseStyle, propsStyle, style]);
  }, [activeTheme, theme, fontSize, fontWeight, restProps, style]);

  if (!themes[activeTheme]) {
    console.warn(`Theme "${activeTheme}" not found. Falling back to default styles.`);
    return (
      <Text style={memoizedStyle} {...restProps}>
        {children}
      </Text>
    );
  }

  return (
    <Text style={memoizedStyle} {...restProps}>
      {children}
    </Text>
  );
});

TextX.displayName = 'TextX';

export default TextX;
