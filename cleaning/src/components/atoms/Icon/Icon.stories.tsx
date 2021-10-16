import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Icon } from './Icon.component';
import { IconProps } from './Icon.interface';

export default {
  title: 'atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (props) => <Icon {...props} />;

export const Default = Template.bind({});
Default.args = {
  name: 'ic_help',
  width: 30,
};
