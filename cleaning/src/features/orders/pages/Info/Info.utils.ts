import { getCurrentMonth, getCurrentYear, getDayName } from 'lib/date';

export const getCurrentMonthAndYear = () =>
  `${getCurrentMonth()}, ${getCurrentYear()}`;

export const getDateAndDay = (date: Date) =>
  `${date.getDate()}, ${getDayName(date)}`;

const range = (from: number, to: number) =>
  new Array(to - from).fill(0).map((_, i) => from + i);

const START_HOUR = 10;
const END_HOUR = 22;

export const timePoints = range(START_HOUR, END_HOUR)
  .map((time) => [`${time}:00`, `${time}:30`])
  .flat();
