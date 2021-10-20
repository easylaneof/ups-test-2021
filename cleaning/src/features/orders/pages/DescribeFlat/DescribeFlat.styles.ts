import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const top = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100vw;
  height: 100vw;

  padding: 65px 20px 0 20px;

  background: url('/flat_background.png') no-repeat center;
  background-size: 100%;
`;

export const promoButton = css`
  background-color: var(--old-lace);

  border-radius: 15px;

  padding: 20px 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
    fill: var(--ochre);
  }

  span {
    color: var(--ochre);
  }
`;

export const back = css`
  background-color: var(--ice-blue);

  svg {
    fill: none;
    stroke: var(--blue);
  }
`;

export const content = css`
  margin-top: 25px;

  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const heading = css`
  margin-bottom: 20px;
  color: var(--arsenic);
`;

export const row = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
`;

export const subHeading = css`
  margin-bottom: 16px;
  color: var(--arsenic);
  font-size: 14px;
`;

export const nextButton = css`
  margin-top: 45px;
  margin-bottom: 25px;

  width: calc(100% - 40px);
`;
