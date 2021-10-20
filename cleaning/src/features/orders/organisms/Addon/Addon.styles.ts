import { css } from '@emotion/css';

import { AddonCategory } from '../../types';

const activeColors: Record<AddonCategory, string> = {
  kitchen: 'var(--saffron)',
  bathroom: 'var(--blue)',
  pets: 'var(--saffron)',
  extra: '#41434d',
};

const backgroundColors: Record<AddonCategory, string> = {
  kitchen: 'var(--old-lace)',
  bathroom: '#F6F6FD',
  pets: 'var(--old-lace)',
  extra: '#DCE0F2',
};

export const containerClassNames = Object.entries(backgroundColors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: css`
      background-color: ${value};
    `,
  }),
  {} as Record<AddonCategory, string>
);

export const container = css`
  position: relative;
  background: none;

  border: 1px solid var(--border);
  border-radius: 15px;

  padding: 60px 20px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const horizontal = css`
  padding: 40px 80px 20px 20px;

  width: 100%;

  flex-direction: row-reverse;
  justify-content: space-between;

  > div:not(:first-child) {
    margin-right: 35px;
    width: max-content;
  }
`;

export const radioButton = css`
  position: absolute;
  top: 24px;
  right: 24px;

  width: 22px;
  height: 22px;
  border: 2px solid #51525a;
  border-radius: 50%;

  ::after {
    content: '';

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 14px;
    height: 14px;

    border-radius: 50%;
  }
`;

export const radioButtonClassNames = Object.entries(activeColors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: css`
      ::after {
        background-color: ${value};
      }
    `,
  }),
  {} as Record<AddonCategory, string>
);


export const image = css`
  max-width: 120px;
  max-height: 70px;

  margin-bottom: 15px;
`;

export const bottom = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

export const title = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 10px;

  width: 100%;

  h3 {
    margin-right: 6px;
    color: var(--heading);
    max-width: 125px;
    text-align: left;
  }

  svg {
    fill: var(--pale-silver);
  }
`;

export const info = css`
  display: flex;
  align-items: center;
`;

export const price = css`
  padding: 5px 10px;

  border-radius: 5px;
  color: var(--white);

  font-weight: 700;

  margin-right: 12px;
`;

export const priceClassNames = Object.entries(activeColors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: css`
      background-color: ${value};
    `,
  }),
  {} as Record<AddonCategory, string>
);

export const time = css`
  color: var(--pale-silver);
`;
