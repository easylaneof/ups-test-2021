import { createEvent, createStore, Store } from 'effector';

import { EnhancedAddon, Addon } from './types';

const addons: Addon[] = [
  {
    id: 'wash_plate',
    title: 'Помыть плиту',
    category: 'kitchen',
    imageUrl: '/addons/wash_plate.png',
    duration: 20,
    price: 320,
  },
  {
    id: 'wash_microwave',
    title: 'Помыть внутри микроволновки',
    category: 'kitchen',
    imageUrl: '/addons/wash_microwave.png',
    duration: 20,
    price: 120,
  },
  {
    id: 'smell',
    title: 'Вывести запахи',
    category: 'kitchen',
    price: 500,
    imageUrl: '/addons/smell.png',
    duration: 20,
  },
  {
    id: 'bath',
    title: 'Помыть ванну',
    category: 'bathroom',
    price: 320,
    duration: 15,
    imageUrl: '/addons/bath.png',
  },
  {
    id: 'descale',
    title: 'Убрать накипь',
    category: 'bathroom',
    price: 800,
    duration: 32,
    imageUrl: '/addons/washer.png',
  },
  {
    id: 'toilet',
    title: 'Глубокая очистка унитаза',
    category: 'bathroom',
    price: 500,
    duration: 40,
    imageUrl: '/addons/toilet.png',
  },
  {
    id: 'wash_tray',
    title: 'Мытье лотка питомца',
    category: 'pets',
    price: 320,
    duration: 10,
    imageUrl: '/addons/doggy_1.png',
  },
  {
    id: 'wash_wool',
    title: 'Очистка от шерсти',
    category: 'pets',
    price: 120,
    duration: 10,
    imageUrl: '/addons/doggy_2.png',
  },
  {
    id: 'bites',
    title: 'Восстановление после укусов',
    category: 'pets',
    price: 120,
    duration: 10,
    imageUrl: '/addons/doggy_3.png',
  },
  {
    id: 'more',
    title: 'Убрать что-то ещё',
    category: 'extra',
    price: 320,
    duration: 10,
    imageUrl: '/addons/dots.png',
  },
  {
    id: 'wash_furniture',
    title: 'Химчистка мебели',
    price: 500,
    duration: 20,
    category: 'extra',
    imageUrl: '/addons/sofa.png',
  },
  {
    id: 'shirt_cleaning',
    title: 'Химчистка одежды',
    category: 'extra',
    price: 320,
    imageUrl: '/addons/shirt.png',
    duration: 20,
  },
];

export const $addons = createStore<EnhancedAddon[]>(
  addons.map((addon) => ({
    ...addon,
    selected: false,
  }))
);

export const $selectedAddons = $addons.map((addons) =>
  addons.filter((addon) => addon.selected)
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const $shirtCleaning: Store<EnhancedAddon> = $addons.map((addons) =>
  addons.find((addon) => addon.id === 'shirt_cleaning')
);

export const $kitchen = $addons.map((addons) =>
  addons.filter((addon) => addon.category === 'kitchen')
);

export const $bathroom = $addons.map((addons) =>
  addons.filter((addon) => addon.category === 'bathroom')
);

export const $pets = $addons.map((addons) =>
  addons.filter((addon) => addon.category === 'pets')
);

export const $extra = $addons.map((addons) =>
  addons.filter((addon) => addon.category === 'extra')
);

const _setAddonSelected = createEvent<{ id: string; selected: boolean }>();

export const setAddonSelected = (id: string) => (selected: boolean) =>
  _setAddonSelected({
    id,
    selected,
  });

$addons.on(_setAddonSelected, (addons, { id, selected }) =>
  addons.map((addon) => {
    if (addon.id !== id) {
      return addon;
    }

    return { ...addon, selected };
  })
);
