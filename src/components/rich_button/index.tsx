import './index.scss';

import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface RichButtonProps {
  additionalClassNames?: String[];
  children: String | ReactElement | ReactElement[];
  mode?: 'primary' | 'secondary' | 'tertiary';
  outline?: Boolean,
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  transparent?: Boolean;
};

export const RichButton = ({
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
