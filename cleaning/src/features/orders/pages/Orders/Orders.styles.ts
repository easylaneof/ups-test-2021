import { css } from '@emotion/css';

export const container = css`
  padding: 40px 20px 0 20px;
`;

export const button = css`
  background-color: var(--blue);

  font-size: 16px;
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 45px;

  width: 100%;

  padding: 20px;

  border-radius: 10px;
`;

export const left = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    fill: #feb471;
    margin-right: 10px;
  }
`;
