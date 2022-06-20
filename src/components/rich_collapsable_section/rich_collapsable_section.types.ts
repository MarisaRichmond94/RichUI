import { ReactElement } from 'react';

export interface RichCollapsableSectionProps {
  children: ReactElement,
  classNames?: string[],
  icon?: ReactElement,
  id: string,
  isInitiallyVisible?: boolean,
  sectionTitle: string,
  onToggleCallback?: () => void,
};
