import { Story } from "@storybook/react";
import React from 'react';
import { FaReact } from 'react-icons/fa';

import { ButtonStyle, RichButton, RichButtonProps, Size } from '../components/rich_button';

export default {
  title: 'Example/RichButton',
  component: RichButton,
};

const Template: Story<RichButtonProps> = args => <RichButton {...args} />;

export const RichIconButton = Template.bind({});
RichIconButton.args = {
  buttonStyle: ButtonStyle.icon,
  children: <FaReact />,
  classNames: ['light-blue'],
  size: Size.extraLarge,
  onClick: () => {},
};

export const RichOutlineButton = Template.bind({});
RichOutlineButton.args = {
  buttonStyle: ButtonStyle.outline,
  children: 'Submit',
  classNames: ['green'],
  size: Size.small,
  onClick: () => {},
};

export const RichUnderlineButton = Template.bind({});
RichUnderlineButton.args = {
  buttonStyle: ButtonStyle.underline,
  children: 'Submit',
  classNames: ['red'],
  size: Size.small,
  onClick: () => {},
};

export const RichSolidButton = Template.bind({});
RichSolidButton.args = {
  buttonStyle: ButtonStyle.solid,
  children: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  ),
  classNames: ['teal'],
  size: Size.medium,
  onClick: () => {},
};

export const RichPillButton = Template.bind({});
RichPillButton.args = {
  buttonStyle: ButtonStyle.pill,
  children: 'Submit',
  classNames: ['green'],
  size: Size.small,
  onClick: () => {},
};

export const RichOutlinePillButton = Template.bind({});
RichOutlinePillButton.args = {
  buttonStyle: ButtonStyle.outlinepill,
  children: 'Submit',
  classNames: ['purple'],
  size: Size.small,
  onClick: () => {},
};

export const RichDisabledButton = Template.bind({});
RichDisabledButton.args = {
  buttonStyle: ButtonStyle.solid,
  children: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  ),
  classNames: ['off-black'],
  isDisabled: true,
  size: Size.medium,
  onClick: () => {},
};
