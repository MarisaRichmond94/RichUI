import React from 'react';

import RichButton from './rich_button';
import { ButtonStyle, Mode, Size } from './rich_button.types';
import { FaReact } from 'react-icons/fa';

export default {
  title: 'Example/RichButton',
  component: RichButton,
  argTypes: {},
};

export const RichIconButton = () => (
  <RichButton
    additionalClassNames={['blue', 'text']}
    mode={Mode.secondary}
    size={Size.extraLarge}
    buttonStyle={ButtonStyle.icon}
  >
    <FaReact />
  </RichButton>
);

export const RichSolidIconButton = () => (
  <RichButton
    additionalClassNames={['grey', 'background']}
    mode={Mode.secondary}
    size={Size.extraLarge}
    buttonStyle={ButtonStyle.solid}
  >
    <FaReact />
  </RichButton>
);

export const RichSolidButton = () => (
  <RichButton
    additionalClassNames={['blue', 'background']}
    mode={Mode.secondary}
    size={Size.small}
    buttonStyle={ButtonStyle.solid}
  >
    Submit
  </RichButton>
);

export const RichOutlineTextButton = () => (
  <RichButton
    additionalClassNames={['blue', 'text']}
    mode={Mode.primary}
    size={Size.small}
    buttonStyle={ButtonStyle.outline}
  >
    Submit
  </RichButton>
);

export const RichUnderlineButton = () => (
  <RichButton
    additionalClassNames={['grey', 'text']}
    mode={Mode.primary}
    size={Size.small}
    buttonStyle={ButtonStyle.underline}
  >
    Submit
  </RichButton>
);

export const RichSolidIconTextButton = () => (
  <RichButton
    additionalClassNames={['grey', 'background']}
    mode={Mode.primary}
    size={Size.medium}
    buttonStyle={ButtonStyle.solid}
  >
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <FaReact style={{ fontSize: '20px' }} />&nbsp;
      Submit
    </span>
  </RichButton>
);
