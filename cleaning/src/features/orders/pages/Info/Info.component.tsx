import React, { useMemo, useState } from 'react';

import { useStore } from 'effector-react';

import { cx } from '@emotion/css';

import { useRouter } from 'next/router';

import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { convertPrice, convertTime } from 'lib/format';
import { getAllDaysUntilEndOfMonth } from 'lib/date';

import { Text } from 'components/atoms/Text';
import { Heading } from 'components/atoms/Heading';
import { Icon, IconProps } from 'components/atoms/Icon';
import { TextInput } from 'components/molecules/TextInput';
import { Textarea } from 'components/molecules/Textarea';
import { Button } from 'components/molecules/Button';
import { Header } from 'components/organisms/Header';

import { $numberOfRooms, $numberOfBathRooms } from '../../flat.model';
import {
  $duration,
  $price,
  complete,
  setDate,
  setTime,
} from '../../orders.model';
import {
  $address,
  setBuilding,
  setCity,
  setComment,
  setEntrance,
  setFlat,
  setHouse,
  setStreet,
} from '../../address.model';

import { $tabIndex, setTabIndex, $isFirstStageValid } from './Info.model';
import {
  getCurrentMonthAndYear,
  getDateAndDay,
  timePoints,
} from './Info.utils';

import * as s from './Info.styles';

const mock = () => {};

const mapIcon: IconProps = {
  width: 20,
  translateY: 2,
  name: 'ic_position',
  viewBox: 24,
};

const FirstStage = () => {
  const { city, street, house, flat, building, entrance, comment } =
    useStore($address);

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
  const [dateSwiper, setDateSwiper] = useState<SwiperClass | null>(null);
  const [timeSwiper, setTimeSwiper] = useState<SwiperClass | null>(null);

  const date = useMemo(() => getCurrentMonthAndYear(), []);
  const dates = useMemo(() => getAllDaysUntilEndOfMonth(), []);

  const onSlideNext = () => {
    if (!dateSwiper || !timeSwiper) return;

    setDate(dates[dateSwiper.activeIndex]);
    setTime(timePoints[timeSwiper.activeIndex]);

    setTabIndex(2);
  };

  return (
    <div className={s.stageContainer}>
      <Heading
        text='Выберите удобные дату и время'
        type='h2'
        className={s.title}
      />

      <Heading text={date} type='h3' className={s.month} />

      <Swiper
        spaceBetween={10}
        slidesPerView='auto'
        centeredSlides
        className={s.swiper}
        resistanceRatio={0}
        onSwiper={setDateSwiper}
      >
        {dates.map((d) => (
          <SwiperSlide key={d.toString()}>
            <div className={s.date}>
              <Text text={getDateAndDay(d)} className={s.day} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView='auto'
        centeredSlides
        className={s.swiper}
        resistanceRatio={0}
        onSwiper={setTimeSwiper}
      >
        {timePoints.map((time) => (
          <SwiperSlide key={time}>
            <div className={s.date}>
              <Text text={time} className={s.day} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        onClick={onSlideNext}
        content='text'
        text='далее'
        className={s.nextButton}
      />
    </div>
  );
};

const ThirdStage = () => {
  const router = useRouter();

  const next = async () => {
    complete();
    await router.push('/order');
  };

  return (
    <div className={s.stageContainer}>
      <Heading text='Выберите способ оплаты' type='h2' className={s.title} />

      <Button
        onClick={next}
        content='text'
        text='Наличными клинеру'
        className={cx(s.payButton, s.mb)}
      />

      <Button
        onClick={next}
        content='text'
        text='Картой клинеру'
        className={s.payButton}
      />

      <Text text='Или' className={s.or} />

      <Button
        onClick={next}
        className={cx(s.blackPayButton, s.applePay)}
        content='none'
      />

      <Button
        onClick={next}
        className={cx(s.blackPayButton, s.googlePay)}
        content='none'
      />
    </div>
  );
};

export const InfoPage = (): JSX.Element => {
  const tabIndex = useStore($tabIndex);

  const numberOfRooms = useStore($numberOfRooms);
  const numberOfBathRooms = useStore($numberOfBathRooms);
  const duration = useStore($duration);
  const price = useStore($price);

  return (
    <div className={s.container}>
      <Header
        text={`${numberOfRooms} Комната, ${numberOfBathRooms} Санузел, ${convertTime(
          duration
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
        {tabIndex === 2 && <ThirdStage />}
      </main>
    </div>
  );
};
