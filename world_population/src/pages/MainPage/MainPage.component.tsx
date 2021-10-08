import React from 'react';

import { Row } from 'components/molecules/Row';
import { Table } from 'components/templates/Table';
import { Heading } from 'components/atoms/Heading';

import { countriesWithPercentage } from './MainPage.model';

import s from './MainPage.module.scss';

export const MainPage = (): JSX.Element => {
  return (
    <div className={s.container}>
      <Heading text='World population' type='main' className={s.populationHeader} />

      <Heading text='Ten most popular countries' type='subheading' className={s.description} />

      <Table className={s.table}>
        {countriesWithPercentage.map((country) => (
          <Row country={country} key={country.name} />
        ))}
      </Table>
    </div>
  );
};
