export type Country = {
  name: string;
  population: number;
};

export type CountryWithPercentage = Country & {
  percentage: number;
};
