import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RichButton } from 'components/rich_button';
import { FaReact } from 'react-icons/fa';

export default {
  title: 'Example/RichButton',
  component: RichButton,
  argTypes: {

  }
} as ComponentMeta<typeof RichButton>

const Template: ComponentStory<typeof RichButton> = (args) => <RichButton {...args} />;

export const RichIconButton = Template.bind({});
RichIconButton.args = {
  children: <FaReact />,
  additionalClassNames: ['blue', 'text'],
  mode: 'secondary',
  size: 'extra-large',
  transparent: true,
};

export const RichTextButton = Template.bind({});
RichTextButton.args = {
  children: 'Submit',
  additionalClassNames: ['blue', 'background'],
  size: 'small',
}

export const RichOutlineTextButton = Template.bind({});
RichOutlineTextButton.args = {
  children: 'Submit',
  additionalClassNames: ['blue', 'text'],
  mode: 'secondary',
  outline: true,
  size: 'small',
  transparent: true,
}

export const RichTextIconButton = Template.bind({});
RichTextIconButton.args = {
  children: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  ),
  additionalClassNames: ['blue', 'background'],
  mode: 'secondary',
  size: 'medium',
}
