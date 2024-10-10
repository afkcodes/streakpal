import { SquircleView } from 'expo-squircle-view';
import React, { useMemo } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';
import {
  BorderRadiusSize,
  ButtonSize,
  ButtonVariant,
  FontSize,
  FontWeight,
} from '../types/component.types';
import { Theme } from '../types/theme.type';
import PressableX from './PressableX';
import TextX from './TextX';

interface ButtonProps {
  onPress: () => void;
  title: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  themeOverride?: Theme;
  style?: ViewStyle;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  borderRadius?: BorderRadiusSize | number;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  size = 'md',
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  themeOverride,
  style,
  fontSize = 'md',
  fontWeight = 'bold',
  borderRadius = 'none',
  ...restProps
}) => {
  const { theme } = useTheme();
  const activeTheme = themeOverride || theme;

  const buttonStyles = useMemo(() => {
    const getBorderRadius = () => {
      if (typeof borderRadius === 'number') {
        return borderRadius;
      }
      return (
        themes[activeTheme].borderRadius[borderRadius] ||
        themes[activeTheme].borderRadius.none
      );
    };

    const baseStyle: ViewStyle = {
      borderRadius: getBorderRadius(),
      opacity: disabled ? themes[activeTheme].buttons.states.disabled.opacity : 1,
      overflow: 'hidden', // This will clip the ripple effect
    };

    const sizeStyle: ViewStyle = {
      height: themes[activeTheme].buttons.sizes[size].height,
      paddingHorizontal: themes[activeTheme].buttons.sizes[size].paddingHorizontal,
    };

    const variantStyle: ViewStyle = {
      backgroundColor: themes[activeTheme].buttons.variants[variant].backgroundColor,
      borderWidth: variant === 'outline' ? themes[activeTheme].borderWidths.thin : 0,
      borderColor:
        variant === 'outline'
          ? themes[activeTheme].buttons.variants[variant].borderColor
          : undefined,
    };

    const fullWidthStyle: ViewStyle = fullWidth ? { width: '100%' } : {};

    return StyleSheet.create({
      buttonWrapper: {
        ...baseStyle,
        ...fullWidthStyle,
        ...variantStyle,
      },
      button: {
        ...sizeStyle,
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
    });
  }, [activeTheme, size, variant, disabled, fullWidth, borderRadius]);

  const textStyles = useMemo(() => {
    const baseTextStyle: TextStyle = {
      color: themes[activeTheme].buttons.variants[variant].color,
      fontSize: themes[activeTheme].buttons.sizes[fontSize].fontSize,
      fontFamily: themes[activeTheme]?.typography?.fontFamily?.[fontWeight] || undefined,
    };

    return StyleSheet.create({
      text: {
        ...baseTextStyle,
      },
    });
  }, [activeTheme, fontWeight, variant, fontSize]);

  const iconStyle = useMemo(() => {
    return StyleSheet.create({
      icon: {
        marginHorizontal:
          themes[activeTheme].buttons.iconSpacing || themes[activeTheme].spacing.xs,
      },
    });
  }, [activeTheme]);
  return (
    <SquircleView
      style={[buttonStyles.buttonWrapper, style]}
      preserveSmoothing
      cornerSmoothing={100}>
      <PressableX
        onPress={onPress}
        android_ripple={{
          color: themes[activeTheme].buttons.variants[variant].activeBackgroundColor,
        }}
        style={buttonStyles.button}
        disabled={disabled}
        {...restProps}>
        <View style={buttonStyles.contentContainer}>
          {leftIcon && (
            <TextX style={iconStyle.icon} themeOverride={activeTheme}>
              {leftIcon}
            </TextX>
          )}
          <TextX style={textStyles.text} themeOverride={activeTheme}>
            {title}
          </TextX>
          {rightIcon && (
            <TextX style={iconStyle.icon} themeOverride={activeTheme}>
              {rightIcon}
            </TextX>
          )}
        </View>
      </PressableX>
    </SquircleView>
  );
};

export default React.memo(Button);
