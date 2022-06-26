import { Story } from "@storybook/react";
import React from 'react';
import { FaReact } from 'react-icons/fa';

import {
  RichCollapsableSection,
  RichCollapsableSectionProps,
} from '../components/rich_collapsable_section';

export default {
  title: 'Example/RichCollapsableSection',
  component: RichCollapsableSection,
};

const Template: Story<RichCollapsableSectionProps> = args => <RichCollapsableSection {...args} />;

export const RichCollapsableSectionWithIcon = Template.bind({});
RichCollapsableSectionWithIcon.args = {
  children: (
    <p className='sub-header-text' style={{ padding: '0 15px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  ),
  icon: <FaReact />,
  id: 'rich-collapsable-section-with-icon',
  sectionTitle: 'Collapsable Section',
};

export const RichClickableHeaderCollapsableSection = Template.bind({});
RichClickableHeaderCollapsableSection.args = {
  children: (
    <p className='sub-header-text' style={{ padding: '0 15px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  ),
  icon: <FaReact />,
  id: 'rich-collapsable-section-with-icon',
  sectionTitle: 'Collapsable Section',
  wholeHeaderClickable: true,
};
