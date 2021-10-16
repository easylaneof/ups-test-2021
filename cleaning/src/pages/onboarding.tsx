import type { NextPage } from 'next';

import { css, cx } from '@emotion/css';

import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

const OnBoarding: NextPage = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      draggable={false}
      className={swiperClassName}
      resistanceRatio={0}
    >
      <SwiperSlide className={cx(slideClassName, firstSlideClassName)}>
        Heading
      </SwiperSlide>
      <SwiperSlide className={slideClassName}>Heading</SwiperSlide>
      <SwiperSlide className={slideClassName}>Heading</SwiperSlide>
    </Swiper>
  );
};

const swiperClassName = css`
  min-height: 100vh;

  .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    width: auto;
    height: max-content;

    left: 20px;
    top: 5%;
  }

  .swiper-wrapper {
    min-height: 100vh;
  }
`;

const slideClassName = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const firstSlideClassName = css`
  background: var(--blue);
`;

export default OnBoarding;
