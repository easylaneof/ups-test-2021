export const getCurrentMonth = (): string => {
  return new Date().toLocaleDateString('default', { month: 'long' });
};

export const getCurrentYear = (): string => {
  return new Date().getFullYear().toString();
};

export const getAllDaysUntilEndOfMonth = (): Date[] => {
  const today = new Date();
  const lastDayInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const result: Date[] = [];

  let iterationDate = new Date();
  while (iterationDate.getDate() <= lastDayInMonth.getDate()) {
    result.push(iterationDate);
    iterationDate.setDate(iterationDate.getDate() + 1);
  }

  return result;
};

const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
export const getDayName = (date: Date): string => {
  return days[date.getDay()];
};
