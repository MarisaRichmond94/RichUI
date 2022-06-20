import React, { useState } from 'react';

import RichToggle from './rich_toggle';

export default {
  title: 'Example/RichToggle',
  component: RichToggle,
  argTypes: {

  }
};

export const RichOnOffToggle = () => {
  const [selected, setSelected] = useState(false);

  return (
    <RichToggle
      onClick={() => setSelected(!selected)}
      selected={selected}
    />
  );
}

export const RichYesNoToggle = () => {
  const [selected, setSelected] = useState(false);

  return (
    <RichToggle
      onClick={() => setSelected(!selected)}
      selected={selected}
      selectedText='YES'
      unSelectedText='NO'
    />
  );
}
