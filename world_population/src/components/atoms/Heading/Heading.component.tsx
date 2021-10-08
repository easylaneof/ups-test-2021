import React from 'react';

import cx from 'classnames';

import { HeadingProps, HeadingTypes } from './Heading.interface';

import s from './Heading.module.scss';

const mapTypeToTag: Record<HeadingTypes, string> = {
  main: 'h1',
  subheading: 'h2',
};

export const Heading = ({
  text,
  type,
  className,
}: HeadingProps): JSX.Element => {
  return React.createElement(
    mapTypeToTag[type],
    { className: cx(s.container, s[type], className) },
    text
  );
};
