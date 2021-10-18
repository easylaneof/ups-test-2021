import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { NavBar } from 'components/organisms/NavBar';

import { CleaningOrder } from '../../organisms/CleaningOrder';
import { Tabs } from '../../templates/Tabs';

import * as s from './OrdersPage.styles';

export const OrdersPage: NextPage = () => {
  const router = useRouter();

  return (
    <main className={s.container}>
      <Tabs
        leftChild={<CleaningOrder onOrder={() => router.push('/describe')} />}
        rightChild='asdasd'
        leftTitle='Актуальные'
        rightTitle='Выполненные'
      />

      <NavBar />
    </main>
  );
};
