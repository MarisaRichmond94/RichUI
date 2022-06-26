import { Story } from "@storybook/react";
import React, { useState } from 'react';

import { RichCheckbox, RichCheckboxProps } from '../components/rich_checkbox';

export default {
  title: 'Example/RichCheckbox',
  component: RichCheckbox,
};

const Template: Story<RichCheckboxProps> = args => {
  const [isActive, setIsActive] = useState(false);

  args.toggleIsActive = () => setIsActive(!isActive);
  args.isActive = isActive

  return <RichCheckbox {...args} />;
}

export const RichDisabledCheckbox = Template.bind({});
RichDisabledCheckbox.args = {
  isDisabled: true,
  text: 'enable yassification',
};

export const RichEnabledCheckbox = Template.bind({});
RichEnabledCheckbox.args = {
  isDisabled: false,
  text: 'accept terms and conditions',
};
