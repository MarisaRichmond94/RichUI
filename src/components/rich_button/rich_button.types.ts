import { ReactElement } from 'react';

export interface RichButtonProps {
  additionalClassNames?: String[],
  children: String | ReactElement | ReactElement[],
  mode?: 'primary' | 'secondary' | 'tertiary',
  outline?: Boolean,
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
  transparent?: Boolean,
};
