import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import React from "react";
import { BsHeart, BsHeartFill } from 'react-icons/bs';

import RichCheckbox, { RichCheckboxProps } from "./RichCheckbox";
import { RichCheckboxColor } from ".";

export default {
  title: "Components/RichCheckbox",
  component: RichCheckbox,
} as Meta;

const Template: Story<RichCheckboxProps> = (args) => <RichCheckbox {...args} />;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = { classNames: ['bold'], onChange: undefined, label: 'Complete Me' };

export const Custom = Template.bind({});
Custom.args = {
  checkedIcon: <BsHeartFill />,
  color: RichCheckboxColor.PrimaryRed,
  onChange: undefined,
  uncheckedIcon: <BsHeart />,
};
