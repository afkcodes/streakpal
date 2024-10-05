export type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type Colors = {
  primary: {
    coral: ColorShades;
    teal: ColorShades;
  };
  neutral: {
    gray: ColorShades;
    white: string;
    black: string;
  };
  accent: {
    yellow: ColorShades;
    purple: ColorShades;
    green: ColorShades;
  };
  semantic: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
};

export type Typography = {
  fontFamily: {
    regular: string;
    medium: string;
    bold: string;
    semibold: string;
    italicMedium: string;
    italicSemiBold: string;
  };
  fontSizes: {
    [key: string]: number;
  };
  lineHeights: {
    [key: string]: number;
  };
  letterSpacing: {
    tight: number;
    normal: number;
    wide: number;
  };
};

export type Shadow = {
  ios: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
  };
  android: { elevation: number };
  web: string;
};

export type Shadows = {
  none: 'none';
  sm: Shadow;
  md: Shadow;
  lg: Shadow;
  inner: Shadow;
};

export type ZIndex = {
  [key: string]: number;
};

export type Opacity = {
  [key: number]: number;
};

export type BorderWidths = {
  [key: string]: number;
};

export type Transitions = {
  duration: {
    [key: string]: string;
  };
  timing: {
    [key: string]: string;
  };
};

export type Breakpoints = {
  [key: string]: number;
};

export type ButtonVariant = {
  backgroundColor: string;
  color: string;
  borderColor?: string;
  borderWidth?: number;
};

export type InputVariant = {
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
};

export type Card = {
  backgroundColor: string;
  borderRadius: number;
  padding: number;
};

export type NavigationBar = {
  height: number;
  backgroundColor: string;
  borderBottomWidth: number;
  borderBottomColor: string;
};

export type Spacing = {
  [key in Size | '0']: number;
};

export type BorderRadius = {
  [key in Exclude<Size, '4xl' | '5xl'> | 'none' | 'full']: number;
};

export type IconSizes = {
  [key in Exclude<Size, '3xs' | '2xs' | '2xl' | '3xl' | '4xl' | '5xl'>]: number;
};

export type ButtonSize = {
  height: number;
  paddingHorizontal: number;
  fontSize: number;
};

export type Buttons = {
  sizes: {
    [key in Exclude<
      Size,
      '3xs' | '2xs' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
    >]: ButtonSize;
  };
  variants: {
    [key: string]: ButtonVariant;
  };
};

export type InputSize = {
  height: number;
  paddingHorizontal: number;
  fontSize: number;
};

export type Inputs = {
  sizes: {
    [key in Exclude<
      Size,
      '3xs' | '2xs' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
    >]: InputSize;
  };
  variants: {
    [key: string]: InputVariant;
  };
};

export type Theme = 'dark' | 'light';
