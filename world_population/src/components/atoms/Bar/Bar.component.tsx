import React from 'react';

import cx from 'classnames';

import { BarProps } from './Bar.interface';

import s from './Bar.module.scss';

export const Bar = ({ percentage, className }: BarProps): JSX.Element => {
  return (
    <div className={cx(s.container, className)}>
      <div
        style={{ width: `${percentage}%` }}
        className={s.bar}
      />
    </div>
  );
};
