import React from 'react';

import { useRouter } from 'next/router';

import { useStore } from 'effector-react';

import { convertPrice } from 'lib/format';

import { Heading } from 'components/atoms/Heading';
import { Text } from 'components/atoms/Text';
import { Icon, IconProps } from 'components/atoms/Icon';
import { Button } from 'components/molecules/Button';

import { $price } from '../../orders.model';
import { $address } from '../../address.model';

import * as s from './Order.styles';

const hourglassIcon: IconProps = {
  width: 20,
  height: 30,
  name: 'ic_hourglass',
  viewBox: 24,
  translateY: -2,
  translateX: 2,
};

export const Order = (): JSX.Element => {
  const router = useRouter();

  const address = useStore($address);
  const price = useStore($price);

  return (
    <div className={s.container}>
      <div className={s.row}>
        <Heading text='Заказ #12331' type='h3' />
        <Heading text={convertPrice(price)} type='h3' />
      </div>

      <Text
        text={`${address.city}, улица ${address.street}, д. ${address.house}, корп. ${address.building}, кв. ${address.flat}`}
        className={s.address}
      />

      <div className={s.row}>
        <div className={s.left}>
          <Icon {...hourglassIcon} />
          <Text text='Поиск клинера' className={s.text} />
        </div>

        <Button
          text='Подробнее'
          content='text'
          className={s.button}
          onClick={() => router.push('/order')}
        />
      </div>
    </div>
  );
};
