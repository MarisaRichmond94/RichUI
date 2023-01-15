import './RichButton.scss';

import React, { FC, PropsWithChildren } from 'react';

import { Color, Size, Type } from './enums';

export interface RichButtonProps extends PropsWithChildren {
  onClick: (event: any) => void,

  classNames?: string[],
  color?: Color,
  id?: string,
  isDisabled?: boolean,
  size?: Size,
  style?: object,
  type?: Type,
};

enum TransparentTypes {
  icon = 'icon',
  outline = 'outline',
  'outline-pill' = 'outline-pill',
  underline = 'underline',
};

const RichButton: FC<RichButtonProps> = ({
  children,
  onClick,

  classNames = [],
  color = Color.Grey,
  id,
  isDisabled = false,
  size = Size.Medium,
  style = {},
  type = Type.Solid,
}) => {
  const derivedClassnames = [color, size, type, type in TransparentTypes ? 'transparent' : ''];

  return (
    <button
      className={['rich-button', ...derivedClassnames, ...classNames].join(' ')}
      disabled={isDisabled}
      id={id}
      onClick={(event: any) => onClick(event)}
      style={style}
      type='button'
    >
      {children}
    </button>
  );
};

export default RichButton;
