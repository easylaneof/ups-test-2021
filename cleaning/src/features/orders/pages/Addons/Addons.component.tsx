import React from 'react';

import { useStore } from 'effector-react';

import { useRouter } from 'next/router';

import { Heading } from 'components/atoms/Heading';
import { Header } from 'components/organisms/Header';

import { PriceButton } from '../../molecules/PriceButton';
import { Addon } from '../../organisms/Addon';
import { AddonsSection } from '../../templates/AddonsSection';

import {
  $bathroom,
  $extra,
  $kitchen,
  $pets,
  $shirtCleaning,
  setAddonSelected,
} from '../../addons.model';
import { $numberOfBathRooms, $numberOfRooms } from '../../flat.model';
import { $duration, $price } from '../../orders.model';

import * as s from './Addons.styles';

export const AddonsPage = (): JSX.Element => {
  const router = useRouter();

  const shirtCleaningAddon = useStore($shirtCleaning);
  const kitchen = useStore($kitchen);
  const bathroom = useStore($bathroom);
  const pets = useStore($pets);
  const extra = useStore($extra);

  const numberOfRooms = useStore($numberOfRooms);
  const numberOfBathRooms = useStore($numberOfBathRooms);

  const duration = useStore($duration);
  const price = useStore($price);

  return (
    <div className={s.container}>
      <Header
        text={`${numberOfRooms} Комната, ${numberOfBathRooms} Санузел `}
      />

      <main>
        <Heading text='Дополнительные услуги' className={s.heading} type='h2' />

        <AddonsSection
          title='Кухня'
          addons={kitchen}
          setSelected={setAddonSelected}
          className={s.section}
        />

        <Addon
          addon={shirtCleaningAddon}
          selected={shirtCleaningAddon.selected}
          setSelected={setAddonSelected(shirtCleaningAddon.id)}
          className={s.addon}
          view='horizontal'
        />

        <AddonsSection
          title='Санузел'
          addons={bathroom}
          setSelected={setAddonSelected}
          className={s.section}
        />

        <AddonsSection
          title='Работы с питомцами'
          addons={pets}
          setSelected={setAddonSelected}
          className={s.section}
        />

        <AddonsSection
          title='Дополнительные услуги'
          addons={extra}
          setSelected={setAddonSelected}
          className={s.section}
        />

        <PriceButton
          onClick={() => router.push('/info')}
          time={duration}
          price={price}
          className={s.nextButton}
        />
      </main>
    </div>
  );
};
