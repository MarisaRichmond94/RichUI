import './rich_button.scss';

import React from 'react';
import classNames from 'classnames';

import { RichButtonProps } from './rich_button.types';

const RichButton = ({
  additionalClassNames = [],
  children,
  mode = 'primary',
  size = 'medium',
  type = 'solid',
  ...props
}: RichButtonProps) => {
  const classes = classNames('rich-button', mode, size, type, ...additionalClassNames);

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
