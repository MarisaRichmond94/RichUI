import './RichButton.scss';

import React, { FC, PropsWithChildren } from 'react';

import { Color, Size, Type, TransparentTypes } from './Types';

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
}) => (
  <button
    className={['rich-button', color, size, type, type in TransparentTypes ? 'transparent' : '', ...classNames].join(' ')}
    disabled={isDisabled}
    id={id}
    onClick={(event: any) => onClick(event)}
    style={style}
    type='button'
  >
    {children}
  </button>
);

export default RichButton;
