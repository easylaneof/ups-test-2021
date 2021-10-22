import React from 'react';

import { cx } from '@emotion/css';

import type { IconProps } from 'components/atoms/Icon';
import { Heading } from 'components/atoms/Heading';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/molecules/Button';

import { SlideProps } from './Slide.interface';

import * as s from './Slide.styles';

const nextIcon: IconProps = {
  width: 20,
  viewBox: [10, 20],
  translateY: 2,
  name: 'ic_arrow_right',
};

export const Slide = ({
  imageSrc,
  imageAlt,
  onSlideNext,
  text,
  heading,
  headingClassName,
  textClassName,
  nextButtonClassName,
}: SlideProps): JSX.Element => {
  return (
    <>
      <div className={s.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={s.image} />
      </div>

      <div className={s.bottom}>
        <Heading
          text={heading}
          type='h1'
          className={cx(s.heading, headingClassName)}
        />

        <Text text={text} className={cx(s.text, textClassName)} />

        <Button
          onClick={onSlideNext}
          shape='square'
          content='icon'
          icon={nextIcon}
          className={nextButtonClassName}
        />
      </div>
    </>
  );
};
