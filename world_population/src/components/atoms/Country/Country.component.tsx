import React from 'react';

import cx from 'classnames';

import { Text } from '../Text';

import { CountryProps } from './Country.interface';

import s from './Country.module.scss';

export const Country = ({ text, className }: CountryProps): JSX.Element => {
  return <Text text={text} className={cx(s.container, className)} />;
};
