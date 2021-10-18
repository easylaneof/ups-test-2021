import React from 'react';

import { useRouter } from 'next/router';

import { Text } from 'components/atoms/Text';
import { Icon, IconProps } from 'components/atoms/Icon';
import { Heading } from 'components/atoms/Heading';
import { Button } from 'components/molecules/Button';

import * as s from './Addons.styles';

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

export const AddonsPage = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <header className={s.header}>
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

            <Text text='1 Комната, 1 Санузел' />
          </div>
        </div>
      </header>

      <main>
        <Heading text='Дополнительные услуги' className={s.heading} type='h2' />

        <section className={s.section}>
          <Heading text='Кухня' type='h3' className={s.subHeading} />
        </section>
      </main>
    </div>
  );
};
