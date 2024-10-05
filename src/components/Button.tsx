import React, { useMemo } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';
import { BorderRadiusSize, ButtonSize, ButtonVariant } from '../types/component.types';
import { Theme } from '../types/theme.type';
import TextX from './TextX';
import TouchableX from './TouchableX';

interface ButtonXProps {
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
  textStyle?: TextStyle;
  borderRadius?: BorderRadiusSize | number;
}

const ButtonX: React.FC<ButtonXProps> = ({
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
  textStyle,
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
      button: {
        ...baseStyle,
        ...sizeStyle,
        ...variantStyle,
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        ...fullWidthStyle,
      },
    });
  }, [activeTheme, size, variant, disabled, fullWidth, borderRadius]);

  const textStyles = useMemo(() => {
    const baseTextStyle: TextStyle = {
      color: themes[activeTheme].buttons.variants[variant].color,
      fontSize: themes[activeTheme].buttons.sizes[size].fontSize,
      fontWeight: 'bold',
    };

    return StyleSheet.create({
      text: {
        ...baseTextStyle,
        ...textStyle,
      },
    });
  }, [activeTheme, size, variant, textStyle]);

  const iconStyle = useMemo(() => {
    return StyleSheet.create({
      icon: {
        marginHorizontal:
          themes[activeTheme].buttons.iconSpacing || themes[activeTheme].spacing.xs,
      },
    });
  }, [activeTheme]);

  return (
    <TouchableX
      onPress={onPress}
      activeOpacity={0.7}
      style={[buttonStyles.button, style]}
      disabled={disabled}
      {...restProps}>
      <View style={[buttonStyles.contentContainer]}>
        {leftIcon && <TextX style={iconStyle.icon}>{leftIcon}</TextX>}
        <TextX style={textStyles.text}>{title}</TextX>
        {rightIcon && <TextX style={iconStyle.icon}>{rightIcon}</TextX>}
      </View>
    </TouchableX>
  );
};

export default React.memo(ButtonX);
