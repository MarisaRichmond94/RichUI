import React, { ReactElement, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export interface RichCollapsableSectionProps {
  children: ReactElement,
  classNames?: string[],
  icon?: ReactElement,
  id: string,
  initiallyVisible?: boolean,
  sectionTitle: string,
  wholeHeaderClickable?: boolean,
  onToggleCallback?: () => void,
};

export const RichCollapsableSection = ({
  children,
  classNames = [],
  icon,
  id,
  initiallyVisible = true,
  sectionTitle,
  wholeHeaderClickable = false,
  onToggleCallback,
}: RichCollapsableSectionProps) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  if (wholeHeaderClickable) classNames.push('clickable-header')

  const onToggle = (updatedIsVisible: boolean): void => {
    setIsVisible(updatedIsVisible);
    if (!!onToggleCallback) onToggleCallback();
  };

  return (
    <div id={id} className={['rich-collapsable-section', ...classNames].join(' ')}>
      <div className='header header-text' onClick={wholeHeaderClickable ? () => onToggle(!isVisible) : () => {}}>
        <div className='title'>{icon}&nbsp;&nbsp;{sectionTitle}</div>
        <div onClick={wholeHeaderClickable ? () => {} : () => onToggle(!isVisible)}>
          {
            isVisible
              ? <IoIosArrowDown />
              : <IoIosArrowUp  />
          }
        </div>
      </div>
      <hr className='divider'/>
      <div className={isVisible ? 'visible' : 'hidden'}>
        {children}
      </div>
    </div>
  );
};
