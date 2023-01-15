import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { FcPlanner } from 'react-icons/fc';

import RichBadge, { RichBadgeProps } from "./RichBadge";

export default {
  title: "Components/RichBadge",
  component: RichBadge,
} as Meta;

const Template: Story<RichBadgeProps> = (args) => (
  <RichBadge {...args}>
    {args.children}
  </RichBadge>
);

export const BadgeNotification = Template.bind({});
BadgeNotification.args = {
  children: <FcPlanner />,
  content: 5,
};

export const DotBadgeNotification = Template.bind({});
DotBadgeNotification.args = {
  children: <FcPlanner />,
};
