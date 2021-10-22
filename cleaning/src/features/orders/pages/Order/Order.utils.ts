import { getDayName, getMonthName } from 'lib/date';

export const getDateAndDay = (date: Date) => {
  return `${date.getDate()} ${getMonthName(date)}, ${getDayName(date)}`;
};
