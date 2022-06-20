import './rich_toggle.scss';

import React from 'react';

import { RichToggleProps } from './rich_toggle.types';

const RichToggle = ({
  onClick,
  selected = false,
  selectedText = 'ON',
  unSelectedText = 'OFF',
}: RichToggleProps) => {
  return (
    <div className='rich-toggle' onClick={() => onClick()}>
      <div className={`rich-toggle-button ${selected ? 'selected' : 'unselected'}`}>
        {selected ? selectedText : unSelectedText}
      </div>
    </div>
  );
};

export default RichToggle;
