import {
  BorderRadius,
  BorderWidths,
  Colors,
  IconSizes,
  Opacity,
  Shadows,
  Spacing,
  Typography,
} from '../types/theme.type';
import { font, ms, vs } from '../utils/screenUtil';
export const colors: Colors = {
  primary: {
    coral: {
      50: '#FFEFEF',
      100: '#FFDADA',
      200: '#FFB8B8',
      300: '#FF8F8F',
      400: '#FF5C5C',
      500: '#FF3A3A', // Main Coral color
      600: '#DB3030',
      700: '#B82828',
      800: '#941F1F',
      900: '#751818',
    },
    teal: {
      50: '#E6F4F4',
      100: '#BFEAEA',
      200: '#80DADA',
      300: '#4DCBCB',
      400: '#26BFBF',
      500: '#1EAFAF', // Main Teal color
      600: '#198E8E',
      700: '#137070',
      800: '#0F5656',
      900: '#0A4141',
    },
  },
  neutral: {
    gray: {
      50: '#F9F9F9',
      100: '#F1F1F1',
      200: '#E0E0E0',
      300: '#CFCFCF',
      400: '#B1B1B1',
      500: '#8E8E8E',
      600: '#707070',
      700: '#5A5A5A',
      800: '#3D3D3D',
      900: '#2A2A2A',
    },
    white: '#FFFFFF',
    black: '#000000',
  },
  accent: {
    yellow: {
      50: '#FFF9E6',
      100: '#FFF3CC',
      200: '#FFE799',
      300: '#FFDB66',
      400: '#FFCF33',
      500: '#FFC300', // Main Yellow color
      600: '#DBA600',
      700: '#B88A00',
      800: '#946E00',
      900: '#755700',
    },
    purple: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0', // Main Purple color
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
    },
    green: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50', // Main Green color
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
    },
  },
  semantic: {
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8',
  },
};

export const typography: Typography = {
  fontFamily: {
    regular: 'Jost-Regular',
    medium: 'Jost-Medium',
    italicMedium: 'Jost-MediumItalic',
    semibold: 'Jost-SemiBold',
    italicSemiBold: 'Jost-SemiBoldItalic',
    bold: 'Jost-Bold',
  },
  fontSizes: {
    '3xs': font(8),
    '2xs': font(10),
    xs: font(12),
    sm: font(14),
    md: font(16),
    lg: font(18),
    xl: font(20),
    '2xl': font(24),
    '3xl': font(30),
  },
  lineHeights: {
    '3xs': vs(12),
    '2xs': vs(14),
    xs: vs(16),
    sm: vs(20),
    md: vs(24),
    lg: vs(28),
    xl: vs(32),
    '2xl': vs(36),
    '3xl': vs(42),
  },
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
};

export const spacing: Spacing = {
  '0': 0,
  '3xs': ms(2),
  '2xs': ms(4),
  xs: ms(8),
  sm: ms(12),
  md: ms(16),
  lg: ms(20),
  xl: ms(24),
  '2xl': ms(32),
  '3xl': ms(40),
  '4xl': ms(48),
  '5xl': ms(64),
};

export const borderRadius: BorderRadius = {
  none: 0,
  '3xs': ms(2),
  '2xs': ms(4),
  xs: ms(6),
  sm: ms(8),
  md: ms(10),
  lg: ms(12),
  xl: ms(16),
  '2xl': ms(20),
  '3xl': ms(24),
  full: 9999,
};

export const shadows: Shadows = {
  none: 'none',
  sm: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: vs(1) },
      shadowOpacity: 0.05,
      shadowRadius: ms(2),
    },
    android: { elevation: 1 },
    web: `0px ${vs(1)}px ${ms(2)}px rgba(0, 0, 0, 0.05)`,
  },
  md: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: vs(4) },
      shadowOpacity: 0.1,
      shadowRadius: ms(6),
    },
    android: { elevation: 5 },
    web: `0px ${vs(4)}px ${ms(6)}px rgba(0, 0, 0, 0.1)`,
  },
  lg: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: vs(10) },
      shadowOpacity: 0.1,
      shadowRadius: ms(15),
    },
    android: { elevation: 10 },
    web: `0px ${vs(10)}px ${ms(15)}px rgba(0, 0, 0, 0.1)`,
  },
  inner: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: vs(2) },
      shadowOpacity: 0.07,
      shadowRadius: ms(3),
    },
    android: { elevation: 0 },
    web: `inset 0px ${vs(2)}px ${ms(4)}px rgba(0, 0, 0, 0.07)`,
  },
};

export const opacity: Opacity = {
  0: 0,
  25: 0.25,
  50: 0.5,
  75: 0.75,
  100: 1,
};

export const borderWidths: BorderWidths = {
  none: 0,
  thin: ms(1),
  medium: ms(2),
  thick: ms(4),
};

export const iconSizes: IconSizes = {
  sm: ms(16),
  md: ms(24),
  lg: ms(32),
  xl: ms(48),
  xs: 0,
};

export const buttons = {
  borderRadius: {
    default: 'md', // Default border radius for buttons
  },
  sizes: {
    sm: {
      height: 32,
      paddingHorizontal: 12,
      fontSize: 14,
      iconSize: 16,
    },
    md: {
      height: 40,
      paddingHorizontal: 16,
      fontSize: 16,
      iconSize: 20,
    },
    lg: {
      height: 48,
      paddingHorizontal: 20,
      fontSize: 18,
      iconSize: 24,
    },
  },
  variants: {
    primary: {
      backgroundColor: colors.primary.coral[500],
      color: colors.neutral.white,
      hoverBackgroundColor: colors.primary.coral[600],
      activeBackgroundColor: colors.primary.coral[700],
    },
    secondary: {
      backgroundColor: colors.primary.teal[500],
      color: colors.neutral.white,
      hoverBackgroundColor: colors.primary.teal[600],
      activeBackgroundColor: colors.primary.teal[700],
    },
    accent: {
      backgroundColor: colors.accent.yellow[500],
      color: colors.neutral.black,
      hoverBackgroundColor: colors.accent.yellow[600],
      activeBackgroundColor: colors.accent.yellow[700],
    },
    success: {
      backgroundColor: colors.semantic.success,
      color: colors.neutral.white,
      hoverBackgroundColor: colors.accent.green[600],
      activeBackgroundColor: colors.accent.green[700],
    },
    warning: {
      backgroundColor: colors.semantic.warning,
      color: colors.neutral.black,
      hoverBackgroundColor: colors.accent.yellow[600],
      activeBackgroundColor: colors.accent.yellow[700],
    },
    error: {
      backgroundColor: colors.semantic.error,
      color: colors.neutral.white,
      hoverBackgroundColor: colors.primary.coral[600],
      activeBackgroundColor: colors.primary.coral[700],
    },
    info: {
      backgroundColor: colors.semantic.info,
      color: colors.neutral.white,
      hoverBackgroundColor: colors.primary.teal[600],
      activeBackgroundColor: colors.primary.teal[700],
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary.coral[500],
      borderColor: colors.primary.coral[500],
      borderWidth: 1,
      hoverBackgroundColor: colors.primary.coral[50],
      activeBackgroundColor: colors.primary.coral[100],
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.primary.coral[500],
      hoverBackgroundColor: colors.primary.coral[50],
      activeBackgroundColor: colors.primary.coral[100],
    },
  },
  states: {
    disabled: {
      opacity: 0.5,
    },
  },
  iconSpacing: 8, // Space between icon and text
};

// // Component-specific tokens
// export const buttons: Buttons = {
//   sizes: {
//     sm: {
//       height: vs(32),
//       paddingHorizontal: ms(12),
//       fontSize: typography.fontSizes.xs,
//     },
//     md: {
//       height: vs(40),
//       paddingHorizontal: ms(16),
//       fontSize: typography.fontSizes.sm,
//     },
//     lg: {
//       height: vs(48),
//       paddingHorizontal: ms(20),
//       fontSize: typography.fontSizes.md,
//     },
//   },
//   variants: {
//     primary: {
//       backgroundColor: colors.primary.coral[500],
//       color: colors.neutral.white,
//     },
//     secondary: {
//       backgroundColor: colors.primary.teal[500],
//       color: colors.neutral.white,
//     },
//     outline: {
//       backgroundColor: 'transparent',
//       borderColor: colors.primary.coral[500],
//       borderWidth: borderWidths.thin,
//       color: colors.primary.coral[500],
//     },
//   },
// };

// export const inputs: Inputs = {
//   sizes: {
//     sm: {
//       height: vs(32),
//       paddingHorizontal: ms(12),
//       fontSize: typography.fontSizes.xs,
//     },
//     md: {
//       height: vs(40),
//       paddingHorizontal: ms(16),
//       fontSize: typography.fontSizes.sm,
//     },
//     lg: {
//       height: vs(48),
//       paddingHorizontal: ms(20),
//       fontSize: typography.fontSizes.md,
//     },
//   },
//   variants: {
//     outline: {
//       borderColor: colors.neutral.gray[300],
//       borderWidth: borderWidths.thin,
//       borderRadius: borderRadius.sm,
//     },
//     filled: {
//       backgroundColor: colors.neutral.gray[100],
//       borderRadius: borderRadius.sm,
//     },
//   },
// };

// export const cards: { default: Card } = {
//   default: {
//     backgroundColor: colors.neutral.white,
//     borderRadius: borderRadius.lg,
//     padding: spacing.lg,
//     ...shadows.md,
//   },
// };

// export const navigationBar: NavigationBar = {
//   height: vs(56),
//   backgroundColor: colors.neutral.white,
//   borderBottomWidth: borderWidths.thin,
//   borderBottomColor: colors.neutral.gray[200],
// };
