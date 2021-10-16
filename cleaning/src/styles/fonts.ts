import { css } from '@emotion/css';

export const fonts = css`
  :root {
    --font-size-base: 1rem;

    --font-size-tn: calc(var(--font-size-base) * 0.75);
    --font-size-sm: calc(var(--font-size-base) * 0.875);
    --font-size-md: var(--font-size-base);
    --font-size-lg: calc(var(--font-size-base) * 1.125);
    --font-size-xl: calc(var(--font-size-base) * 1.25);
    --font-size-2xl: calc(var(--font-size-base) * 1.625);
    --font-size-3xl: calc(var(--font-size-base) * 2);

    --main-font: 'Montserrat', sans-serif;
  }
`;
