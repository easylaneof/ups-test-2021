import React from 'react';

import { Unit } from 'lib/css';

import { IconName } from './Icon.constants';

export type IconProps = {
  name: IconName;

  viewBox?: number | [number, number];

  width: Unit;
  height?: Unit;

  fill?: string;
  stroke?: string;

  translate?: Unit;
  translateX?: Unit;
  translateY?: Unit;

  className?: string;
  style?: React.CSSProperties;
};
