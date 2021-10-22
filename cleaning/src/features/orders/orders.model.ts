import { createEvent, createStore, restore } from 'effector';

import { $addons } from './addons.model';

const MINUTES_IN_HOUR = 60;
const BASE_DURATION = 3 * MINUTES_IN_HOUR;
const BASE_PRICE = 650;

export const $duration = $addons.map(
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

export const setDate = createEvent<Date>();
export const $date = restore(setDate, new Date());

export const setTime = createEvent<string>();
export const $time = restore(setTime, '');

export const complete = createEvent();
export const $completed = createStore(false).on(complete, () => true);
