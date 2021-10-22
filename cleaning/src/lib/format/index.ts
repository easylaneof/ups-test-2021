const MINUTES_IN_HOURS = 60;

export const convertTime = (time: number): string => {
  const hours = Math.floor(time / MINUTES_IN_HOURS);
  const minutes = time % MINUTES_IN_HOURS;
  const withHalf = minutes >= 30;

  return `≈ ${hours}${withHalf ? ',5' : ''} Часа`;
};

export const convertPrice = (price: number): string => {
  return `${price} ₽`;
};
