import React from 'react';

import { Icon, IconProps } from 'components/atoms/Icon';
import { Text } from 'components/atoms/Text';
import { NavBar } from 'components/organisms/NavBar';

import * as s from './Cleaners.styles';

const heartIcon: IconProps = {
  name: 'ic_heart',
  width: 45,
  viewBox: 40,
};

export const CleanersPage = (): JSX.Element => {
  return (
    <main className={s.container}>
      <Icon {...heartIcon} className={s.heart} />

      <Text
        text='Здесь будут клинеры, которые вам понравятся'
        className={s.text}
      />

      <NavBar />
    </main>
  );
};
