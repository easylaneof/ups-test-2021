import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { Text } from 'components/atoms/Text';
import { Heading } from 'components/atoms/Heading';
import { Icon, IconProps } from 'components/atoms/Icon';
import { Button } from 'components/molecules/Button';
import { NumberSelect } from 'components/organisms/NumberSelect';

import * as s from './DescribeFlat.styles';

const prevIcon: IconProps = {
  width: 20,
  viewBox: [10, 20],
  translateY: 2,
  name: 'ic_arrow_left',
};

const ticketIcon: IconProps = {
  width: 20,
  translateY: 2,
  name: 'ic_lottery_ticket',
};

const mock = () => {};

export const DescribeFlatPage = (): JSX.Element => {
  const router = useRouter();

  const [numberOfRooms, setNumberOfRooms] = useState<null | number>(null);
  const [numberOfBathRooms, setNumberOfBathRooms] = useState<null | number>(
    null
  );

  return (
    <main className={s.container}>
      <div className={s.top}>
        <Button
          onClick={router.back}
          content='icon'
          shape='square'
          className={s.back}
          icon={prevIcon}
        />

        <Button onClick={mock} className={s.promoButton}>
          <Icon {...ticketIcon} />
          <Text text='Ввести промокод' />
        </Button>
      </div>

      <div className={s.content}>
        <Heading
          text='Расскажите о вашей квартире'
          type='h2'
          className={s.heading}
        />

        <div className={s.row}>
          <Heading
            text='Количество комнат'
            type='h3'
            className={s.subHeading}
          />

          <NumberSelect
            maxNumber={4}
            selected={numberOfRooms}
            setSelected={setNumberOfRooms}
          />
        </div>

        <div className={s.row}>
          <Heading text='Санузлов' type='h3' className={s.subHeading} />

          <NumberSelect
            maxNumber={4}
            selected={numberOfBathRooms}
            setSelected={setNumberOfBathRooms}
          />
        </div>
      </div>

      {numberOfBathRooms && numberOfRooms && (
        <Button onClick={mock} className={s.nextButton}>
          <Text text='≈ 3 Часа' className={s.timeEstimation} />
          <Heading type='h3' text='далее' className={s.next} />
          <Heading type='h3' text='650 ₽' className={s.price} />
        </Button>
      )}
    </main>
  );
};
