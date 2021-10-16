import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Heading } from './Heading.component';
import { HeadingProps } from './Heading.interface';

export default {
  title: 'atoms/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (props) => <Heading {...props} />;

export const Default = Template.bind({});
Default.args = {
  type: 'h1',
  text: 'Heading!!',
};
