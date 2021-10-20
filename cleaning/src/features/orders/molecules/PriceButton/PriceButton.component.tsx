import React from 'react';

import { cx } from '@emotion/css';

import { convertPrice, convertTime } from 'lib/format';

import { Button } from 'components/molecules/Button';
import { Text } from 'components/atoms/Text';
import { Heading } from 'components/atoms/Heading';

import { PriceButtonProps } from './PriceButton.interface';

import * as s from './PriceButton.styles';

export const PriceButton = ({
  onClick,
  price,
  time,
  className,
}: PriceButtonProps): JSX.Element => {
  return (
    <Button onClick={onClick} className={cx(s.container, className)}>
      <Text text={convertTime(time)} className={s.timeEstimation} />
      <Heading type='h3' text='далее' className={s.next} />
      <Heading type='h3' text={convertPrice(price)} className={s.price} />
    </Button>
  );
};
