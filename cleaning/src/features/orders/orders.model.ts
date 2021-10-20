import { createStore } from 'effector';

import { $addons } from './addons.model';

const MINUTES_IN_HOUR = 60;
const BASE_DURATION = 3 * MINUTES_IN_HOUR;
const BASE_PRICE = 650;

export const $time = $addons.map(
  (addons) =>
    BASE_DURATION +
    addons.reduce(
      (acc, addon) => acc + (addon.selected ? addon.duration : 0),
      0
    )
);

export const $price = $addons.map(
  (addons) =>
    BASE_PRICE +
    addons.reduce((acc, addon) => acc + (addon.selected ? addon.price : 0), 0)
);

export const $completed = createStore(false);
