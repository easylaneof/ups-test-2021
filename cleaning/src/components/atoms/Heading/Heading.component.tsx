import React from 'react';

import { cx } from '@emotion/css';

import { HeadingProps } from './Heading.interface';

import * as s from './Heading.styles';

export const Heading = ({
  type,
  text,
  className,
}: HeadingProps): JSX.Element => {
  return React.createElement(
    type,
    { className: cx(s.container, className) },
    text
  );
};
