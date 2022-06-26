import { Story } from "@storybook/react";
import React, { useState } from 'react';

import { RichTextInput, RichTextInputProps, TextInputTypes } from '../components/rich_text_input';

export default {
  title: 'Example/RichTextInput',
  component: RichTextInput,
};

const Template: Story<RichTextInputProps> = args => {
  const [formValue, setFormValue] = useState(args.formValue || '');

  if (args.formValue) {
    args.formValue = formValue
    args.onChangeCallback = (input: string) => setFormValue(input);
  } else {
    delete args.onChangeCallback;
  }

  return <RichTextInput {...args} />;
}

export const RichControlledPasswordTextInput = Template.bind({});
RichControlledPasswordTextInput.args = {
  classNames: ['off-white', 'width-50-vw'],
  formValue: '',
  placeholder: 'enter your password',
  type: TextInputTypes.password,
};

export const RichUncontrolledTextInput = Template.bind({});
RichUncontrolledTextInput.args = {
  classNames: ['off-white', 'width-50-vw'],
  placeholder: 'enter a username',
};
