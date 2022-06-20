import React from 'react';

export interface RichToggleProps {
  onClick: () => void,
  selected?: boolean,
  selectedText?: string,
  unSelectedText?: String,
};

export const RichToggle = ({
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
