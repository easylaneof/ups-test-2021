import { createEvent, createStore, restore } from 'effector';

export const setNumberOfRooms = createEvent<number>();
export const $numberOfRooms = restore(setNumberOfRooms, null);

export const setNumberOfBathRooms = createEvent<number>();
export const $numberOfBathRooms = restore(setNumberOfBathRooms, null);
