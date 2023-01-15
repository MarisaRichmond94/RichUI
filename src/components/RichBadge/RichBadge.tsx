import './RichBadge.scss';

import React, { FC, PropsWithChildren } from 'react';

import { determineBadgeStyling } from './effects';
import { Color, Horizontal, Veritcal } from './enums';

export interface RichBadgeProps extends PropsWithChildren {
  classNames?: string[],
  color?: Color,
  content?: string | number,
  horizontal?: Horizontal,
  vertical?: Veritcal,
};

const RichBadge: FC<RichBadgeProps> = ({
  children,

  classNames = [],
  color = Color.Alert,
  content,
  horizontal = Horizontal.Top,
  vertical = Veritcal.Right,
}) => (
  <span className={['rich-badge', ...classNames].join(' ')}>
    <div className={['content'].join(' ')}>
      {children}
    </div>
    <span
      className={['badge', !content ? 'dot' : '', color, horizontal, vertical].join(' ')}
      style={determineBadgeStyling({ content, horizontal, vertical })}
    >
      {content}
    </span>
  </span>
);

export default RichBadge;
