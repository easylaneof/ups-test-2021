import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react';

import { Addon } from './Addon.component';
import { AddonProps } from './Addon.interface';

export default {
  title: 'orders/organisms/Addon',
  component: Addon,
} as Meta;

const Template: Story<AddonProps> = (props) => {
  const [selected, setSelected] = useState(false);
  return <Addon {...props} selected={selected} setSelected={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  addon: {
    title: 'Помыть плиту',
    price: 320,
    duration: 20,
    imageUrl: '/addons/wash_plate.png',
    category: 'kitchen',
  },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  addon: {
    title: 'Помыть плиту',
    price: 320,
    duration: 20,
    imageUrl: '/addons/wash_plate.png',
    category: 'kitchen',
  },
  view: 'horizontal',
};
