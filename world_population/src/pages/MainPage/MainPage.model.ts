import { Country, CountryWithPercentage } from 'types/country.types';

const WORLD_POPULATION = 7_898_404_553;

const calculatePercentage = (population: number): number => {
  return Math.ceil((100 * population) / WORLD_POPULATION);
};

const countries: Country[] = [
  {
    name: 'World',
    population: WORLD_POPULATION,
  },

  {
    name: 'China',
    population: 1_402_112_000,
  },
  {
    name: 'India',
    population: 1_380_004_000,
  },
  {
    name: 'United States',
    population: 329_484_000,
  },
  {
    name: 'Indonesia',
    population: 273_523_000,
  },
  {
    name: 'Pakistan',
    population: 220_892_000,
  },
  {
    name: 'Brazil',
    population: 212_559_000,
  },
  {
    name: 'Nigeria',
    population: 206_139_000,
  },
  {
    name: 'Bangladesh',
    population: 164_689_000,
  },
  {
    name: 'Russian Federation',
    population: 144_104_000,
  },
  {
    name: 'Mexico',
    population: 128_932_000,
  },
];

export const countriesWithPercentage: CountryWithPercentage[] = countries.map(
  (country) => ({
    ...country,
    percentage: calculatePercentage(country.population),
  })
);
