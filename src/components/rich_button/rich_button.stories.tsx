import React from 'react';

import RichButton from './rich_button';
import { FaReact } from 'react-icons/fa';

export default {
  title: 'Example/RichButton',
  component: RichButton,
  argTypes: {

  }
};

export const RichIconButton = () => (
  <RichButton
    additionalClassNames={['blue', 'text']}
    mode='secondary'
    size='extra-large'
    transparent
  >
    <FaReact />
  </RichButton>
);

export const RichTextButton = () => (
  <RichButton
    additionalClassNames={['blue', 'background']}
    mode='secondary'
    size='small'
    outline
    transparent
  >
    Submit
  </RichButton>
);

export const RichOutlineTextButton = () => (
  <RichButton
    additionalClassNames={['blue', 'text']}
    mode='secondary'
    size='small'
    outline
    transparent
  >
    Submit
  </RichButton>
);

export const RichTextIconButton = () => (
  <RichButton
    additionalClassNames={['blue', 'background']}
    mode='secondary'
    size='medium'
  >
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  </RichButton>
);
