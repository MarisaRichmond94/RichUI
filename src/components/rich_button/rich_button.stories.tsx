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
    type='icon'
  >
    <FaReact />
  </RichButton>
);

export const RichSolidIconButton = () => (
  <RichButton
    additionalClassNames={['grey', 'background']}
    mode='secondary'
    size='extra-large'
    type='solid'
  >
    <FaReact />
  </RichButton>
);

export const RichSolidButton = () => (
  <RichButton
    additionalClassNames={['blue', 'background']}
    mode='secondary'
    size='small'
    type='solid'
  >
    Submit
  </RichButton>
);

export const RichOutlineTextButton = () => (
  <RichButton
    additionalClassNames={['blue', 'text']}
    mode='primary'
    size='small'
    type='outline'
  >
    Submit
  </RichButton>
);

export const RichUnderlineButton = () => (
  <RichButton
    additionalClassNames={['grey', 'text']}
    mode='primary'
    size='small'
    type='underline'
  >
    Submit
  </RichButton>
);

export const RichSolidIconTextButton = () => (
  <RichButton
    additionalClassNames={['grey', 'background']}
    mode='primary'
    size='medium'
    type='solid'
  >
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  </RichButton>
);
