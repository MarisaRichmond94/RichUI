import React, { useState } from 'react';

export interface RichTextInputProps {
  classNames?: string[],
  clearKey?: string,
  formValue?: string,
  placeholder?: string,
  type?: `${TextInputTypes}`,
  onChangeCallback?: (value: string) => void,
  onKeyPressCallback?: (e: object) => void,
  validateTextInput?: (value: string) => void,
};

export enum TextInputTypes {
  text = 'text',
  password = 'password',
};

export const RichTextInput = ({
  classNames = [],
  clearKey,
  formValue,
  placeholder,
  type,
  onChangeCallback,
  onKeyPressCallback,
  validateTextInput,
  ...props
}: RichTextInputProps) => {
  const [value, setValue] = useState('');

  const onChange = (input: string): void => {
    console.log(onChangeCallback)
    if (onChangeCallback) {
      onChangeCallback(input);
      if (validateTextInput) validateTextInput(input);
    } else setValue(input);
  };

  const onKeyPress = (e: any): void => {
    if (onKeyPressCallback) {
      onKeyPressCallback(e);
      if (clearKey && e.key === clearKey) setValue('');
    }
  }

  return (
    <input
      autoComplete='none'
      className={['rich-text-input', 'sub-header-text', ...classNames].join(' ')}
      name={Math.random().toString()} // prevent auto complete on common input fields
      onChange={e => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder={placeholder || ''}
      spellCheck='false'
      type={type || 'text'}
      value={formValue || value}
    />
  );
};
