import React from 'react';

import cx from 'classnames';

import { TableProps } from './Table.interface';

import s from './Table.module.scss';

export const Table = ({ children, className }: TableProps): JSX.Element => {
  return <div className={cx(s.container, className)}>{children}</div>;
};
