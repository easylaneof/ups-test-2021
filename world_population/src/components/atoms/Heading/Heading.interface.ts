export type HeadingTypes = 'main' | 'subheading';

export type HeadingProps = {
  text: string;
  type: HeadingTypes;

  className?: string;
};
