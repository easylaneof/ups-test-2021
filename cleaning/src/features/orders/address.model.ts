import { combine, createEvent, restore } from 'effector';

export const setCity = createEvent<string>();
export const $city = restore(setCity, '');

export const setStreet = createEvent<string>();
export const $street = restore(setStreet, '');

export const setHouse = createEvent<string>();
export const $house = restore(setHouse, '');

export const setFlat = createEvent<string>();
export const $flat = restore(setFlat, '');

export const setBuilding = createEvent<string>();
export const $building = restore(setBuilding, '');

export const setEntrance = createEvent<string>();
export const $entrance = restore(setEntrance, '');

export const setComment = createEvent<string>();
export const $comment = restore(setComment, '');

export const $address = combine({
  city: $city,
  street: $street,
  house: $house,
  flat: $flat,
  building: $building,
  entrance: $entrance,
  comment: $comment,
});
