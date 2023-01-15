import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { BsGithub } from 'react-icons/bs';

import { Color, Size, Type } from "./enums";
import RichButton, { RichButtonProps } from "./RichButton";

export default {
  title: "Components/RichButton",
  component: RichButton,
} as Meta;

const Template: Story<RichButtonProps> = (args) => (
  <RichButton {...args}>
    {args.children}
  </RichButton>
);

export const Base = Template.bind({});
Base.args = { onClick: () => {}, children: 'Click Me' };

export const Icon = Template.bind({});
Icon.args = {
  onClick: () => {},
  children: <BsGithub />,
  color: Color.PrimaryPurple,
  type: Type.Icon,
  size: Size.ExtraLarge,
  style: { fontSize: '80px' },
};
