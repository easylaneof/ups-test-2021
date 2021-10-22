import { css } from '@emotion/css';

export const container = css`
  padding: 90px 20px 20px 20px;
`;

export const card = css`
  padding: 42px 20px 20px 20px;
  border-radius: 20px;
  background-color: var(--blue);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const image = css`
  width: calc(100% - 40px);
  margin-bottom: 40px;
`;

export const title = css`
  color: var(--white);
  margin-bottom: 25px;
`;

export const text = css`
  color: var(--white);
  text-align: center;

  margin-bottom: 45px;
`;

export const button = css`
  background-color: var(--white);

  width: 100%;
  padding: 20px;

  border-radius: 11px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--blue);
  font-weight: bold;
`;
