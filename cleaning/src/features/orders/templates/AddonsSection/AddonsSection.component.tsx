import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '@emotion/css';

import { Heading } from 'components/atoms/Heading';

import { Addon } from '../../organisms/Addon';

import { AddonsSectionProps } from './AddonsSection.interface';

import * as s from './AddonsSection.styles';

export const AddonsSection = ({
  addons,
  title,
  setSelected,
  className,
}: AddonsSectionProps): JSX.Element => {
  return (
    <section className={cx(s.container, className)}>
      <Heading text={title} type='h3' className={s.subHeading} />

      <Swiper spaceBetween={12} slidesPerView={2}>
        {addons.map((addon) => (
          <SwiperSlide key={addon.id}>
            <Addon
              addon={addon}
              selected={addon.selected}
              setSelected={setSelected(addon.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
