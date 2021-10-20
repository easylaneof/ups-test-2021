import React, { useMemo } from 'react';

import { useStore } from 'effector-react';

import { cx } from '@emotion/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { convertPrice, convertTime } from 'lib/format';

import { Text } from 'components/atoms/Text';
import { Heading } from 'components/atoms/Heading';
import { Icon, IconProps } from 'components/atoms/Icon';
import { TextInput } from 'components/molecules/TextInput';
import { Textarea } from 'components/molecules/Textarea';
import { Button } from 'components/molecules/Button';
import { Header } from 'components/organisms/Header';

import { $numberOfRooms, $numberOfBathRooms } from '../../flat.model';
import { $time, $price } from '../../orders.model';
import {
  $building,
  $city,
  $comment,
  $entrance,
  $flat,
  $house,
  $street,
  setBuilding,
  setCity,
  setComment,
  setEntrance,
  setFlat,
  setHouse,
  setStreet,
} from '../../address.model';

import { $tabIndex, setTabIndex, $isFirstStageValid } from './Info.model';
import { getCurrentMonthAndYear } from './Info.utils';

import * as s from './Info.styles';
import { getAllDaysUntilEndOfMonth } from '../../../../lib/date';

const mock = () => {};

const mapIcon: IconProps = {
  width: 20,
  translateY: 2,
  name: 'ic_position',
  viewBox: 24,
};

const FirstStage = () => {
  const city = useStore($city);
  const street = useStore($street);
  const house = useStore($house);
  const flat = useStore($flat);
  const building = useStore($building);
  const entrance = useStore($entrance);
  const comment = useStore($comment);

  const isValid = useStore($isFirstStageValid);

  return (
    <div className={s.stageContainer}>
      <Heading text='Адрес квартиры' type='h2' />

      <Button onClick={mock} className={s.map}>
        <Icon {...mapIcon} />
        <Text text='Указать на карте' />
      </Button>

      <Text text='Или' className={s.or} />
      <TextInput
        value={city}
        setValue={setCity}
        placeholder='Город'
        className={s.mb}
      />

      <TextInput
        value={street}
        setValue={setStreet}
        placeholder='Улица'
        className={s.mb}
      />

      <div className={s.twoInputs}>
        <TextInput value={house} setValue={setHouse} placeholder='Дом' />
        <TextInput value={flat} setValue={setFlat} placeholder='Квартира' />
      </div>

      <div className={s.twoInputs}>
        <TextInput
          value={building}
          setValue={setBuilding}
          placeholder='Корпус'
        />
        <TextInput
          value={entrance}
          setValue={setEntrance}
          placeholder='Подъезд'
        />
      </div>

      <Textarea
        value={comment}
        setValue={setComment}
        placeholder='Комментарий к заказу'
      />

      {isValid && (
        <Button
          onClick={() => setTabIndex(1)}
          content='text'
          text='далее'
          className={s.nextButton}
        />
      )}
    </div>
  );
};

const SecondStage = () => {
  const date = useMemo(() => getCurrentMonthAndYear(), []);
  const dates = useMemo(() => getAllDaysUntilEndOfMonth(), []);

  return (
    <div className={s.stageContainer}>
      <Heading
        text='Выберите удобные дату и время'
        type='h2'
        className={s.title}
      />

      <Heading text={date} type='h3' className={s.date} />

      <Swiper slidesPerView={3} spaceBetween={10}>
        {dates.map((d) => (
          <SwiperSlide key={d.toString()}>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const InfoPage = (): JSX.Element => {
  const tabIndex = useStore($tabIndex);

  const numberOfRooms = useStore($numberOfRooms);
  const numberOfBathRooms = useStore($numberOfBathRooms);
  const time = useStore($time);
  const price = useStore($price);

  return (
    <div className={s.container}>
      <Header
        text={`${numberOfRooms} Комната, ${numberOfBathRooms} Санузел, ${convertTime(
          time
        )}, ${convertPrice(price)}`}
      />

      <main>
        <div className={s.progress}>
          <Text
            text='Адрес'
            className={cx(s.stage, tabIndex === 0 && s.activeStage)}
          />
          <div className={s.split} />
          <Text
            text='Время'
            className={cx(s.stage, tabIndex === 1 && s.activeStage)}
          />
          <div className={s.split} />
          <Text
            text='Оплата'
            className={cx(s.stage, tabIndex === 2 && s.activeStage)}
          />
        </div>

        {tabIndex === 0 && <FirstStage />}
        {tabIndex === 1 && <SecondStage />}
      </main>
    </div>
  );
};
