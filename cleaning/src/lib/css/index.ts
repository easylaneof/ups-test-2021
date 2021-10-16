export type Unit = number | string;
export type StringUnit = 'number' | 'string';

export const mapTypeToUnit: Record<StringUnit, string> = {
  string: '',
  number: 'px',
};

export const typeToString = (value: Unit): StringUnit =>
  typeof value === 'number' ? 'number' : 'string';
