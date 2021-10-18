import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react';

import { NumberSelect } from './NumberSelect.component';
import { NumberSelectProps } from './NumberSelect.interface';

export default {
  title: 'organisms/NumberSelect',
  component: NumberSelect,
} as Meta;

const Template: Story<NumberSelectProps> = (props) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <NumberSelect
      selected={selected}
      setSelected={setSelected}
      maxNumber={props.maxNumber}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  maxNumber: 4,
};
