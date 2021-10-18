import React from 'react';

import { cx } from '@emotion/css';

import { Button } from 'components/molecules/Button';

import { NumberSelectProps } from './NumberSelect.interface';

import * as s from './NumberSelect.styles';

export const NumberSelect = ({
  maxNumber,
  setSelected,
  selected,
}: NumberSelectProps): JSX.Element => {
  return (
    <div className={s.container}>
      {new Array(maxNumber)
        .fill(0)
        .map((_, i) => i + 1)
        .map((index) => (
          <Button
            key={index}
            text={String(index)}
            content='text'
            shape='square'
            onClick={() => setSelected(index)}
            className={cx(
              s.button,
              selected === index && s.activeButton,
              selected !== null && selected !== index && s.disabledButton
            )}
          />
        ))}
    </div>
  );
};
