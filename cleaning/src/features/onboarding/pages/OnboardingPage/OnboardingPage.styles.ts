import { css } from '@emotion/css';

export const swiperClassName = css`
  min-height: 100vh;

  .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    width: auto;
    height: max-content;

    left: 20px;
    top: 5%;
  }

  .swiper-pagination-bullet {
    transition: background-color 0.2s;
  }

  .swiper-wrapper {
    min-height: 100vh;
  }
`;

export const swiperBullets = [
  css`
    .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.4);
    }

    .swiper-pagination-bullet-active {
      background-color: var(--white);
    }
  `,

  css`
    .swiper-pagination-bullet {
      background-color: rgba(54, 86, 249, 0.5);
    }

    .swiper-pagination-bullet-active {
      background-color: var(--blue);
    }
  `,

  css`
    .swiper-pagination-bullet {
      background-color: rgba(254, 180, 113, 0.5);
    }

    .swiper-pagination-bullet-active {
      background-color: var(--orange);
    }
  `,
];

export const slide = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 100vh;
`;


export const firstSlide = {
  className: css`
    background: var(--blue);
  `,

  heading: css`
    color: var(--white);
  `,

  text: css`
    color: var(--periwinkle);
  `,

  button: css`
    margin-top: 40px;

    background: var(--white);

    svg {
      stroke: var(--blue);
      fill: none;
    }
  `,
};

export const secondSlide = {
  className: css`
    background: var(--white);
  `,

  heading: css`
    color: var(--arsenic);
  `,

  text: css`
    color: var(--text);
  `,

  button: css`
    margin-top: 40px;

    background: var(--blue);

    svg {
      stroke: var(--white);
      fill: none;
    }
  `,
};

export const thirdSlide = {
  className: css`
    background: var(--white);
  `,

  heading: css`
    color: var(--arsenic);
  `,

  text: css`
    color: var(--text);
  `,

  button: css`
    margin-top: 40px;

    background: var(--orange);

    svg {
      stroke: var(--white);
      fill: none;
    }
  `,
};
