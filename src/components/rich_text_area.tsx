import React, { useState } from 'react';

export interface RichTextAreaProps {
  classNames?: string[],
  formValue?: string,
  placeholder?: string,
  rowCount?: number,
  onChangeCallback?: (input: string) => void,
  validateInput?: (input: String) => void
};

export const RichTextArea = ({
  classNames = [],
  formValue,
  placeholder,
  rowCount,
  onChangeCallback,
  validateInput,
  ...props
}: RichTextAreaProps) => {
  const [value, setValue] = useState('');

  const onChange = (input: string): void => {
    if (onChangeCallback) {
      onChangeCallback(input);
      if (validateInput) validateInput(input);
    } else setValue(input);
  }

  return (
    <textarea
      autoComplete='none'
      className={['rich-text-area', 'sub-header-text', ...classNames].join(' ')}
      name={Math.random().toString()} // prevents autocomplete from happening anyways
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || ''}
      rows={rowCount || 3}
      spellCheck='false'
      value={formValue || value}
      { ...props }
    />
  );
};
