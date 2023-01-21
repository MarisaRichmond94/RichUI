import './RichCheckbox.scss';

import React, { FC, ReactNode, useState } from 'react';
import { BsCheckSquare, BsSquare } from 'react-icons/bs';

import RichButton, { RichButtonColor, RichButtonSize, RichButtonType } from '../RichButton';

export interface RichCheckboxProps {
  checked?: boolean;
  checkedIcon?: ReactNode,
  classNames?: string[],
  color?: RichButtonColor,
  isDisabled?: boolean,
  label?: string,
  onChange?: () => void,
  size?: RichButtonSize,
  uncheckedIcon?: ReactNode,
};

const RichCheckbox: FC<RichCheckboxProps> = ({
  checked,
  checkedIcon = <BsCheckSquare />,
  classNames = [],
  color = RichButtonColor.OffBlack,
  isDisabled = false,
  label = '',
  onChange = undefined,
  size = RichButtonSize.Small,
  uncheckedIcon = <BsSquare />,
}) => {
  const [checkedState, setCheckedState] = useState(false);

  const isCustomCheckbox = !!checkedIcon || !!uncheckedIcon;
  if (isCustomCheckbox && ![checkedIcon, uncheckedIcon].every(it => !!it)) {
    throw Error('Custom RichCheckbox requires both "checkedIcon" and "uncheckedIcon" props');
  }

  const isControlledCheckbox = !!checked || !!onChange;
  if (isControlledCheckbox && ![checked, onChange].every(it => !!it)) {
    throw Error('Controlled RichCheckbox requires both "onChange" and "checked" props')
  }

  const onClick = () => setCheckedState(!checkedState);

  const derivedState = {
    checked: checked ?? checkedState,
    onChange: onChange ?? onClick,
  };

  return (
    <div className={['rich-checkbox', isDisabled ? 'disabled' : '', ...classNames].join(' ')}>
      <RichButton
        color={color}
        onClick={derivedState.onChange}
        isDisabled={isDisabled}
        size={size}
        type={RichButtonType.Icon}
      >
        {derivedState.checked ? checkedIcon : uncheckedIcon}
      </RichButton>
      {
        !!label &&
        <div className={['rich-label', size].join(' ')}>
          {label}
        </div>
      }
    </div>
  );
};

export default RichCheckbox;
