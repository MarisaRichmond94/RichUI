import './rich_button.scss';

import React from 'react';
import classNames from 'classnames';

import { ButtonStyle, Mode, RichButtonProps, Size } from './rich_button.types';

const RichButton = ({
  additionalClassNames = [],
  children,
  mode = Mode.primary,
  size = Size.medium,
  buttonStyle = ButtonStyle.solid,
  ...props
}: RichButtonProps) => {
  const classes = classNames('rich-button', mode, size, buttonStyle, ...additionalClassNames);

  return (
    <button
      type='button'
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default RichButton;
