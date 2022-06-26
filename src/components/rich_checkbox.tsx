import React from 'react';

import { ButtonStyle, RichButton, Size } from './rich_button';
import { BsCheckSquare, BsSquare } from 'react-icons/bs';

export interface RichCheckboxProps {
  classNames?: string[],
  isActive: boolean,
  isDisabled?: boolean,
  text: string,
  toggleIsActive: () => void,
};

export const RichCheckbox = ({
  classNames = [],
  isActive,
  isDisabled = false,
  text,
  toggleIsActive,
}:RichCheckboxProps) => {
  if (isDisabled) classNames.push('disabled');

  return (
    <div className={['rich-checkbox', ...classNames].join(' ')}>
      <RichButton
        classNames={['off-black']}
        onClick={() => toggleIsActive()}
        buttonStyle={ButtonStyle.icon}
        isDisabled={isDisabled}
        size={Size.small}
      >
        {isActive ? <BsCheckSquare /> : <BsSquare />}
      </RichButton>
      <div className='sub-header-text'>{text}</div>
    </div>
  );
};
