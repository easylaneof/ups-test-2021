import { getCurrentMonth, getCurrentYear } from 'lib/date';

export const getCurrentMonthAndYear = () =>
  `${getCurrentMonth()}, ${getCurrentYear()}`;
