import { ReactElement } from 'react';

export interface RichButtonProps {
  additionalClassNames?: string[],
  children: string | ReactElement | ReactElement[],
  mode?: `${Mode}`,
  size?: `${Size}`,
  buttonStyle?: `${ButtonStyle}`,
};

export enum Mode {
  primary = 'primary',
  secondary = 'secondary',
};

export enum Size {
  extraSmall = 'extra-small',
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extra-large',
};
export enum ButtonStyle {
  underline = 'underline',
  outline = 'outline',
  solid = 'solid',
  icon = 'icon',
};
