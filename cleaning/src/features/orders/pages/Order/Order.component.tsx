import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useStore } from 'effector-react';

import { Heading } from 'components/atoms/Heading';
import { Text } from 'components/atoms/Text';
import { Header } from 'components/organisms/Header';

import { $completed, $date, $time } from '../../orders.model';
import { $address } from '../../address.model';
import { $selectedAddons } from '../../addons.model';

import { CleanersSearch } from '../../organisms/CleanersSearch';

import { getDateAndDay } from './Order.utils';

import * as s from './Order.styles';

export const OrderPage = (): JSX.Element => {
  const router = useRouter();

  const completed = useStore($completed);

  const address = useStore($address);
  const date = useStore($date);
  const time = useStore($time);

  const selectedAddons = useStore($selectedAddons);
  const addonsText = selectedAddons.map((addon) => addon.title).join(', ');

  useEffect(() => {
    if (!completed) {
      router.push('/orders');
    }
  }, [completed]);

  return (
    <div className={s.container}>
      <Header
        text={`${address.city}, ул. ${address.street}`}
        onBack={() => router.push('/orders')}
        mainText='Заказ #12331'
      />

      <main>
        <CleanersSearch />

        <Heading
          text={`${getDateAndDay(date)} ${time}`}
          type='h2'
          className={s.title}
        />

        <Heading text='Адрес' type='h3' className={s.subTitle} />
        <Text
          text={`${address.city}, улица ${address.street}, д. ${address.house}, корп. ${address.building}, кв. ${address.flat}`}
          className={s.text}
        />

        {selectedAddons.length !== 0 && (
          <>
            <Heading
              text='Дополнительные услуги'
              type='h3'
              className={s.subTitle}
            />

            <Text text={addonsText} className={s.text} />
          </>
        )}
      </main>
    </div>
  );
};
