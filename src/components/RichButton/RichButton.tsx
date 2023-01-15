import './RichButton.scss';

import React, { FC, PropsWithChildren } from 'react';

import { ButtonSize, ButtonType, TransparentTypes } from './Types';

interface IRichButton extends PropsWithChildren {
  onClick: (event: any) => void,

  classNames?: string[],
  id?: string,
  isDisabled?: boolean,
  size?: ButtonSize,
  style?: object,
  type?: ButtonType,
};

const RichButton: FC<IRichButton> = ({
  children,
  onClick,

  classNames = [],
  id,
  isDisabled = false,
  size = ButtonSize.medium,
  style = {},
  type = ButtonType.solid,
}) => (
  <button
    className={['rich-button', size, type, type in TransparentTypes ? 'transparent' : '', ...classNames].join(' ')}
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
