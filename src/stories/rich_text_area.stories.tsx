import { Story } from "@storybook/react";
import React, { useState } from 'react';

import { RichTextArea, RichTextAreaProps } from '../components/rich_text_area';

export default {
  title: 'Example/RichTextArea',
  component: RichTextArea,
};

const Template: Story<RichTextAreaProps> = args => {
  const [formValue, setFormValue] = useState(args.formValue || '');

  if (args.formValue) {
    args.formValue = formValue
    args.onChangeCallback = (input: string) => setFormValue(input);
  } else {
    delete args.onChangeCallback;
  }

  return <RichTextArea {...args} />;
}

export const RichControlledTextArea = Template.bind({});
RichControlledTextArea.args = {
  classNames: ['off-white', 'width-50-vw'],
  formValue: 'Drake Stryker',
  placeholder: 'enter full name',
  rowCount: 1,
};

export const RichUncontrolledTextArea = Template.bind({});
RichUncontrolledTextArea.args = {
  classNames: ['off-white', 'width-50-vw'],
  placeholder: 'enter a comma separated list of your favorite hobbies',
};
