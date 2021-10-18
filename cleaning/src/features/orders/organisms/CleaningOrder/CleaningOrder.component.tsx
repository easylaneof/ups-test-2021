import React from 'react';

import { cx } from "@emotion/css";

import { Heading } from 'components/atoms/Heading';
import { Text } from 'components/atoms/Text';
import { Icon, IconProps } from 'components/atoms/Icon';

import { Button } from 'components/molecules/Button';

import { CleaningOrderProps } from './CleaningOrder.interface';

import * as s from './CleaningOrder.styles';

const CLEANING_DESCRIPTION =
  'Пришлем проверенного клинера и наведем порядок в вашем доме';

const lightningIcon: IconProps = {
  width: 20,
  name: 'ic_lightning',
};

const nextIcon: IconProps = {
  width: 15,
  viewBox: [10, 20],
  translateY: 2,
  name: 'ic_arrow_right',
};

export const CleaningOrder = ({ onOrder }: CleaningOrderProps): JSX.Element => {
  return (
    <div className={s.container}>
      <img src='/cleaner.png' alt='Cleaner' className={s.woman} />

      <div className={s.content}>
        <div className={cx(s.centeredColumn, s.mb)}>
          <Heading text='Закажите уборку' type='h2' className={s.heading} />
          <Text text={CLEANING_DESCRIPTION} className={s.description} />
        </div>

        <div className={s.centeredColumn}>
          <div className={s.price}>
            <Icon {...lightningIcon} />
            <Heading type='h3' text='от 650 ₽' />
          </div>

          <Button onClick={onOrder} className={s.button}>
            <Text text='Заказать уборку' />
            <Icon {...nextIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};
