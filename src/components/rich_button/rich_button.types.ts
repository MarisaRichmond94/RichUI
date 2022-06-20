import { ReactElement } from 'react';

export interface RichButtonProps {
  additionalClassNames?: String[],
  children: String | ReactElement | ReactElement[],
  mode?: 'primary' | 'secondary',
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
  type?: 'underline' | 'outline' | 'solid' | 'icon',
};
