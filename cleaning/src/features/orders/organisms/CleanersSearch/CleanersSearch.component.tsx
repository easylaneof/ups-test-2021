import React from 'react';

import { Icon, IconProps } from 'components/atoms/Icon';
import { Heading } from 'components/atoms/Heading';

import * as s from './CleanersSearch.styles';

const hourglassIcon: IconProps = {
  width: 20,
  height: 30,
  name: 'ic_hourglass',
  viewBox: 24,
  translateY: -2,
  translateX: 2,
};

export const CleanersSearch = (): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.icon}>
        <Icon {...hourglassIcon} />
      </div>

      <Heading type='h3' text='Ищем клинеров для вас' />
    </div>
  );
};
