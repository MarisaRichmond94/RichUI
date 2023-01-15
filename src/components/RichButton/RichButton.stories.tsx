import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { BsGithub } from 'react-icons/bs';

import RichButton, { RichButtonProps } from "./RichButton";
import { Size, Type } from "./Types";

export default {
  title: "Components/RichButton",
  component: RichButton,
} as Meta;

const Template: Story<RichButtonProps> = (args) => (
  <RichButton {...args}>
    {args.children}
  </RichButton>
);

export const BaseRichButton = Template.bind({});
BaseRichButton.args = { onClick: () => {}, children: 'Click Me' };

export const RichIconButton = Template.bind({});
RichIconButton.args = { onClick: () => {}, children: <BsGithub />, type: Type.Icon, size: Size.ExtraLarge };
