import React from 'react';

import { cx } from '@emotion/css';

import { convertPrice } from 'lib/format';

import { Heading } from 'components/atoms/Heading';
import { Text } from 'components/atoms/Text';

import { AddonProps } from './Addon.interface';

import * as s from './Addon.styles';

export const Addon = ({
  addon,
  setSelected,
  selected,
  view,
  className,
}: AddonProps): JSX.Element => {
  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      onClick={handleClick}
      className={cx(
        s.container,
        view === 'horizontal' && s.horizontal,
        selected && s.containerClassNames[addon.category],
        className
      )}
      type='button'
    >
      <div
        className={cx(
          s.radioButton,
          selected && s.radioButtonClassNames[addon.category]
        )}
      />

      <img src={addon.imageUrl} alt={addon.title} className={s.image} />

      <div className={s.bottom}>
        <div className={s.title}>
          <Heading text={addon.title} type='h3' />
        </div>

        <div className={s.info}>
          <Text
            text={convertPrice(addon.price)}
            className={cx(
              s.price,
              s.priceClassNames[addon.category]
            )}
          />
          <Text text={`${addon.duration} мин.`} className={s.time} />
        </div>
      </div>
    </button>
  );
};
