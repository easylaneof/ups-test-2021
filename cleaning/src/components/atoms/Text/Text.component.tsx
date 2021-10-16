import React from 'react';

import { cx } from '@emotion/css';

import { TextProps } from './Text.interface';

import * as s from './Text.styles';

export const Text = ({ className, text }: TextProps): JSX.Element => {
  return <span className={cx([s.container, className])}>{text}</span>;
};
