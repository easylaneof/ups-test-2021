import React from 'react';

import { Text } from 'components/atoms/Text';
import { Heading } from 'components/atoms/Heading';
import { Button } from 'components/molecules/Button';
import { NavBar } from 'components/organisms/NavBar';

import * as s from './Bonus.styles';

const referral =
  'Поделитесь вашей ссылкой с друзьями. ' +
  'Они получат по 500 рублей на первый заказ. ' +
  'А вы - скидку 500 рублей сразу после их уборки';

const mock = () => {
  //
};

export const BonusPage = (): JSX.Element => {
  return (
    <main className={s.container}>
      <div className={s.card}>
        <img src='/people.png' alt='Our users' className={s.image} />

        <Heading text='500 рублей тебе и другу' className={s.title} type='h2' />

        <Text text={referral} className={s.text} />

        <Button
          onClick={mock}
          text='Поделиться'
          content='text'
          className={s.button}
        />
      </div>

      <NavBar />
    </main>
  );
};
