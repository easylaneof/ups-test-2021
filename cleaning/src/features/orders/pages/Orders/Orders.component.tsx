import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { useStore } from 'effector-react';

import { Text } from 'components/atoms/Text';
import { Icon, IconProps } from 'components/atoms/Icon';
import { Button } from 'components/molecules/Button';
import { NavBar } from 'components/organisms/NavBar';

import { CleaningOrder } from '../../organisms/CleaningOrder';
import { Order } from '../../organisms/Order';
import { Tabs } from '../../templates/Tabs';

import { $completed } from '../../orders.model';

import * as s from './Orders.styles';

const mock = () => {};

const lightningIcon: IconProps = {
  width: 20,
  name: 'ic_lightning',
};

const LeftTab = (): JSX.Element => {
  const router = useRouter();

  const completed = useStore($completed);

  if (completed) {
    return (
      <>
        <Order />

        <Button onClick={mock} className={s.button}>
          <div className={s.left}>
            <Icon {...lightningIcon} />
            <Text text='от 650 ₽' />
          </div>

          <Text text='Заказать уборку' />
        </Button>
      </>
    );
  } else {
    return <CleaningOrder onOrder={() => router.push('/describe')} />;
  }
};

export const OrdersPage: NextPage = () => {
  const router = useRouter();

  return (
    <main className={s.container}>
      <Tabs
        leftChild={<LeftTab />}
        rightChild={<CleaningOrder onOrder={() => router.push('/describe')} />}
        leftTitle='Актуальные'
        rightTitle='Выполненные'
      />

      <NavBar />
    </main>
  );
};
