import { Story } from "@storybook/react";
import React from 'react';
import { FaReact } from 'react-icons/fa';

import { ButtonStyle, Mode, RichButton, RichButtonProps, Size } from '../components/rich_button';

export default {
  title: 'Example/RichButton',
  component: RichButton,
};

const Template: Story<RichButtonProps> = args => <RichButton {...args} />;

export const RichIconButton = Template.bind({});
RichIconButton.args = {
  children: <FaReact />,
  additionalClassNames: ['blue', 'text'],
  mode: Mode.secondary,
  size: Size.extraLarge,
  buttonStyle: ButtonStyle.icon,
};

export const RichSolidIconButton = Template.bind({});
RichSolidIconButton.args = {
  children: <FaReact />,
  additionalClassNames: ['grey', 'background'],
  mode: Mode.secondary,
  size: Size.extraLarge,
  buttonStyle: ButtonStyle.solid,
};

export const RichSolidButton = Template.bind({});
RichSolidButton.args = {
  children: 'Submit',
  additionalClassNames: ['blue', 'background'],
  mode: Mode.secondary,
  size: Size.small,
  buttonStyle: ButtonStyle.solid,
};

export const RichOutlineTextButton = Template.bind({});
RichOutlineTextButton.args = {
  children: 'Submit',
  additionalClassNames: ['blue', 'text'],
  mode: Mode.primary,
  size: Size.small,
  buttonStyle: ButtonStyle.outline,
};

export const RichUnderlineButton = Template.bind({});
RichUnderlineButton.args = {
  children: 'Submit',
  additionalClassNames: ['grey', 'text'],
  mode: Mode.primary,
  size: Size.small,
  buttonStyle: ButtonStyle.underline,
};

export const RichSolidIconTextButton = Template.bind({});
RichSolidIconTextButton.args = {
  children: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  ),
  additionalClassNames: ['grey', 'background'],
  mode: Mode.primary,
  size: Size.medium,
  buttonStyle: ButtonStyle.solid,
};
