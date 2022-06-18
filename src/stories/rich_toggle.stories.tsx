import { Story } from "@storybook/react";
import React, { useState } from 'react';

import { RichToggle, RichToggleProps } from '../components/rich_toggle';

export default {
  title: 'Example/RichToggle',
  component: RichToggle,
};

const Template: Story<RichToggleProps> = args => {
  const [selected, setSelected] = useState(args.selected || false);
  args.onClick = () => { setSelected(!selected); }
  args.selected = selected;

  return <RichToggle {...args} />;
}

export const RichToggleOnOff = Template.bind({});
RichToggleOnOff.args = {
  selected: false
};

export const RichToggleCustomText = Template.bind({});
RichToggleCustomText.args = {
  selected: false,
  selectedText: 'YES',
  unSelectedText: 'NO',
};
