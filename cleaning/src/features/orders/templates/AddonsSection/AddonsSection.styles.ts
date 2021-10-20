import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h3 {
    font-size: 14px;
  }

  .swiper {
    margin: 0;
    width: 100%;
  }

  .swiper-slide {
    width: max-content !important;
  }
`;

export const subHeading = css`
  color: var(--independence);
  margin-bottom: 15px;
`;
