export type SlideProps = {
  imageSrc: string;
  imageAlt: string;

  heading: string;
  text: string;

  onSlideNext(): void;

  headingClassName?: string;
  textClassName?: string;
  nextButtonClassName?: string;
};
