import './rich_button.scss';

import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { RichButtonProps } from './rich_button.types';

const RichButton = ({
  additionalClassNames = [],
  children,
  mode = 'primary',
  outline = false,
  size = 'medium',
  transparent = false,
  ...props
}: RichButtonProps) => {
  const classes = classNames('rich-button', mode, size, {
    'borderless': !outline,
    'transparent': transparent,
  }, ...additionalClassNames);

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
