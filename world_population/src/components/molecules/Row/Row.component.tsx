import React from 'react';

import { Bar } from '../../atoms/Bar';
import { Country } from '../../atoms/Country';
import { Population } from '../../atoms/Population';

import { RowProps } from './Row.interface';

export const Row = ({ country }: RowProps): JSX.Element => {
  return (
    <>
      <Country text={country.name} />
      <Bar percentage={country.percentage} />
      <Population population={country.population} />
    </>
  );
};
