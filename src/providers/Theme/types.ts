type HexColor = string;

interface Base {
  primary: string,
  secondary: string,
  tertiary: string,
  quaternary: string,
};

interface FontWeights {
  light: number,
  regular: number,
  semiBold: number,
  bold: number,
};

interface IntegerSizes {
  base: string;
  '01': string;
  '02': string;
  '03': string;
  '04': string;
  '05': string;
  '06': string;
  '07': string;
  '08': string;
  '09': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
}

interface TShirtSizes<T> {
  xs: T,
  sm: T,
  md: T,
  lg: T,
  xl: T,
};

interface TShirtSizesWithNone<T> extends TShirtSizes<T> {
  none: T,
};

interface Typography {
  fontFamily: string,
  fontWeight: number,
  fontSize: string,
  lineHeight: string,
};

interface Weights {
  0: string,
  100: string,
  200: string,
  300: string,
  400: string,
  500: string,
  600: string,
  700: string,
  900: string,
  800: string,
};

export interface Theme {
  border?: {
    radius?: Partial<TShirtSizesWithNone<string>>,
    width?: Partial<TShirtSizesWithNone<string>>,
  },
  color?: {
    base?: {
      white?: Partial<Base>,
      black?: Partial<Base>,
      grey?: Partial<Base>,
      pink?: Partial<Base>,
      red?: Partial<Base>,
      orange?: Partial<Base>,
      yellow?: Partial<Base>,
      green?: Partial<Base>,
      teal?: Partial<Base>,
      blue?: Partial<Base>,
      purple?: Partial<Base>,
    },
    disabled?: HexColor,
    error?: HexColor,
    info?: HexColor,
    primary?: HexColor,
    secondary?: HexColor,
    success?: HexColor,
    tertiary?: HexColor,
    warning?: HexColor,
  },
  font?: {
    family?: Partial<Base>,
    lineHeight?: Partial<Weights>,
    size?: Partial<IntegerSizes>,
    weight?: Partial<FontWeights>,
  },
  icons?: {
    size?: Partial<TShirtSizes<string>>,
  },
  screen?: {
    breakpoint?: Partial<TShirtSizes<number>>,
  },
  spacing?: Partial<Weights>,
  typography?: {
    body?: {
      small?: Partial<Typography>,
      smallEm?: Partial<Typography>,
      regular?: Partial<Typography>,
      em?: Partial<Typography>,
      large?: Partial<Typography>,
      largeEm?: Partial<Typography>,
    },
    header?: {
      h1?: Partial<Typography>,
      h2?: Partial<Typography>,
      h3?: Partial<Typography>,
      h4?: Partial<Typography>,
      h5?: Partial<Typography>,
    },
  },
};
