import { combine, createEvent, restore } from 'effector';

import {
  $building,
  $city,
  $entrance,
  $flat,
  $house,
  $street,
} from '../../address.model';

export const setTabIndex = createEvent<0 | 1 | 2>();
export const $tabIndex = restore(setTabIndex, 0);

export const $isFirstStageValid = combine(
  [$city, $street, $house, $flat, $entrance, $building],
  (fields) => fields.every(Boolean)
);
