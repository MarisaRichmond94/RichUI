import React from 'react';

import { ButtonStyle, RichButton, Size } from './rich_button';
import { BsCheck2Square, BsSquare } from 'react-icons/bs';

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
        {isActive ? <BsCheck2Square /> : <BsSquare />}
      </RichButton>
      <div className='sub-header-text'>{text}</div>
    </div>
  );
};
