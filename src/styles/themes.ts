import {
  borderRadius,
  borderWidths,
  buttons,
  colors,
  iconSizes,
  opacity,
  shadows,
  spacing,
  typography,
} from './tokens';

export const themes = {
  dark: {
    color: { ...colors },
    typography: { ...typography },
    spacing: { ...spacing },
    borderRadius: { ...borderRadius },
    shadows: { ...shadows },
    opacity: { ...opacity },
    borderWidths: { ...borderWidths },
    iconSizes: { ...iconSizes },
    buttons: { ...buttons },
    background: {
      primary: '#121212',
      secondary: '#1E1E1E',
      tertiary: '#2C2C2C',
      transparent: 'transparent',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      tertiary: '#A0A0A0',
      accent: '#FF3A3A',
    },
  },
  light: {
    color: { ...colors },
    typography: { ...typography },
    spacing: { ...spacing },
    borderRadius: { ...borderRadius },
    shadows: { ...shadows },
    opacity: { ...opacity },
    borderWidths: { ...borderWidths },
    iconSizes: { ...iconSizes },
    background: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      tertiary: '#F3F4F6',
      transparent: 'transparent',
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563',
      tertiary: '#6B7280',
      accent: '#FF3A3A',
    },
    buttons: {
      ...buttons,
      variants: {
        ...buttons.variants,
        primary: {
          ...buttons.variants.primary,
          color: colors.neutral.black,
        },
        secondary: {
          ...buttons.variants.secondary,
          color: colors.neutral.black,
        },
        outline: {
          ...buttons.variants.outline,
          color: colors.primary.coral[600],
          borderColor: colors.primary.coral[600],
          hoverBackgroundColor: colors.primary.coral[200],
          activeBackgroundColor: colors.primary.coral[200],
        },
        ghost: {
          ...buttons.variants.ghost,
          color: colors.primary.coral[600],
          hoverBackgroundColor: colors.primary.coral[200],
          activeBackgroundColor: colors.primary.coral[200],
        },
      },
    },
  },
};
