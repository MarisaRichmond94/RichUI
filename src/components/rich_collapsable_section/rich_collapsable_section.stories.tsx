import React from 'react';

import RichCollapsableSection from './rich_collapsable_section';
import { FaReact } from 'react-icons/fa';

export default {
  title: 'Example/RichCollapsableSection',
  component: RichCollapsableSection,
  argTypes: {},
};

export const RichCollapsableSectionWithIcon = () => (
  <RichCollapsableSection
    classNames={['off-black']}
    icon={<FaReact />}
    id='rich-collapsable-section-with-icon'
    sectionTitle='Collapsable Section'
  >
    <p style={{ padding: '0 15px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </RichCollapsableSection>
);
