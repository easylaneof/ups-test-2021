export type HeadingType = 'h1' | 'h2' | 'h3';

export type HeadingProps = {
  text: string;
  type: HeadingType;

  className?: string;
};
