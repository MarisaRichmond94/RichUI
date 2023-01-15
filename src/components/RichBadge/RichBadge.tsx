import './RichBadge.scss';

import React, { FC, PropsWithChildren } from 'react';
import { Color, Horizontal, Veritcal } from './enums';

export interface RichBadgeProps extends PropsWithChildren {
  content: string | number,

  classNames?: string[],
  color?: Color,
  horizontal?: Horizontal,
  style?: object,
  vertical?: Veritcal,
};

const RichBadge: FC<RichBadgeProps> = ({
  children,
  content,

  classNames = [],
  color = Color.Alert,
  horizontal = Horizontal.Top,
  style = {},
  vertical = Veritcal.Right,
}) => {
  return (
    <div className={['rich-badge', ...classNames].join(' ')} style={style}>
      <span className={['content', color, horizontal, vertical].join(' ')}>
        {content}
      </span>
      <span className={['container'].join(' ')}>
        {children}
      </span>
    </div>
  );
};

export default RichBadge;
