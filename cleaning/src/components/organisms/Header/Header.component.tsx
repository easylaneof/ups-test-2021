import React from 'react';

import { useRouter } from 'next/router';
import { cx } from '@emotion/css';

import { Heading } from 'components/atoms/Heading';
import { Icon, IconProps } from 'components/atoms/Icon';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/molecules/Button';

import { HeaderProps } from './Header.interface';

import * as s from './Header.styles';

const prevIcon: IconProps = {
  width: 20,
  viewBox: [10, 20],
  translateY: 2,
  name: 'ic_arrow_left',
};

const infoIcon: IconProps = {
  width: 20,
  name: 'ic_info',
};

export const Header = ({ text, className }: HeaderProps): JSX.Element => {
  const router = useRouter();

  return (
    <header className={cx(s.header, className)}>
      <div className={s.row}>
        <Button
          onClick={router.back}
          content='icon'
          shape='square'
          className={s.back}
          icon={prevIcon}
        />

        <div className={s.description}>
          <div className={s.serviceName}>
            <Heading text='Стандартная уборка' type='h3' />
            <Icon {...infoIcon} />
          </div>

          <Text text={text} />
        </div>
      </div>
    </header>
  );
};
