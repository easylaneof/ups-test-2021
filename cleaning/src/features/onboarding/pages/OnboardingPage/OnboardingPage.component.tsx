import React, { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { cx } from '@emotion/css';

import { Controller, Pagination } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Slide } from '../../templates/Slide';

import * as s from './OnboardingPage.styles';

const CLEANERS_DESCRIPTION =
  'Наши клинеры - настоящие мастера своего дела, а используемые нами материалы сертифицированны и безопасны';
const CLEANING_DESCRIPTION =
  'После каждой уборки мы забираем ваш мусор, сортируем его и увозим на специализированные свалки.';
const AVAILABILITY_DESCRIPTION =
  'Клининг никогда не был таким доступным. Вы можете заказывать уборку несколько раз в месяц';

export const OnboardingPage: NextPage = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  const slideToNext = () => swiper?.slideNext();
  const finishOnboarding = () => router.push('/orders');

  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, Controller]}
      pagination={{ clickable: true }}
      draggable={false}
      className={cx(s.swiperClassName, s.swiperBullets[activeIndex])}
      resistanceRatio={0}
      onSwiper={setSwiper}
      onSlideChange={(_swiper) => setActiveIndex(_swiper.activeIndex)}
    >
      <SwiperSlide className={cx(s.slide, s.firstSlide.className)}>
        <Slide
          imageSrc='/cleaner_with_background.png'
          imageAlt='Cleaner'
          heading='Блестящее качество'
          text={CLEANERS_DESCRIPTION}
          onSlideNext={slideToNext}
          textClassName={s.firstSlide.text}
          headingClassName={s.firstSlide.heading}
          nextButtonClassName={s.firstSlide.button}
        />
      </SwiperSlide>

      <SwiperSlide className={cx(s.slide, s.secondSlide.className)}>
        <Slide
          imageSrc='/ecocleaning.png'
          imageAlt='Eco cleaning'
          heading='Эко-френдли клининг'
          text={CLEANING_DESCRIPTION}
          onSlideNext={slideToNext}
          textClassName={s.secondSlide.text}
          headingClassName={s.secondSlide.heading}
          nextButtonClassName={s.secondSlide.button}
        />
      </SwiperSlide>

      <SwiperSlide className={cx(s.slide, s.thirdSlide.className)}>
        <Slide
          imageSrc='/available_man.png'
          imageAlt='Available cleaning'
          heading='Небывалая доступность'
          text={AVAILABILITY_DESCRIPTION}
          onSlideNext={finishOnboarding}
          textClassName={s.thirdSlide.text}
          headingClassName={s.thirdSlide.heading}
          nextButtonClassName={s.thirdSlide.button}
        />
      </SwiperSlide>
    </Swiper>
  );
};
