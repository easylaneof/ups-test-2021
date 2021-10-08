import React from 'react';

import { Text } from '../Text';

import { PopulationProps } from './Population.interface';

const formatter = new Intl.NumberFormat();

export const Population = ({ population, className }: PopulationProps): JSX.Element => {
  return <Text text={formatter.format(population)} className={className} />;
};
