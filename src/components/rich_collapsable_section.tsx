import React, { ReactElement, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export interface RichCollapsableSectionProps {
  children: ReactElement,
  classNames?: string[],
  icon?: ReactElement,
  id: string,
  isInitiallyVisible?: boolean,
  sectionTitle: string,
  onToggleCallback?: () => void,
};

export const RichCollapsableSection = ({
  children,
  classNames = [],
  icon,
  id,
  isInitiallyVisible = true,
  sectionTitle,
  onToggleCallback,
}: RichCollapsableSectionProps) => {
  const [isVisible, setIsVisible] = useState(isInitiallyVisible);

  const onToggle = (updatedIsVisible: boolean): void => {
    setIsVisible(updatedIsVisible);
    if (!!onToggleCallback) onToggleCallback();
  };

  return (
    <div id={id} className={['rich-collapsable-section', ...classNames].join(' ')}>
      <div className='header header-text'>
        <div className='title'>{icon}&nbsp;&nbsp;{sectionTitle}</div>
        <div>
          {
            isVisible
              ? <IoIosArrowDown onClick={() => onToggle(false)}/>
              : <IoIosArrowUp onClick={() => onToggle(true)}/>
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
