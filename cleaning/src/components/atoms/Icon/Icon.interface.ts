import React from 'react';

import { Unit } from 'lib/css';

import { IconName } from './Icon.constants';

type Fill = {
  fill: string;
  stroke?: string;
}

type Stroke = {
  stroke: string;
  fill?: string;
}

export type IconProps = (Fill | Stroke) & {
  name: IconName;

  viewBox?: number | [number, number];

  width: Unit;
  height?: Unit;

  translate?: Unit;
  translateX?: Unit;
  translateY?: Unit;

  className?: string;
  style?: React.CSSProperties;
};
