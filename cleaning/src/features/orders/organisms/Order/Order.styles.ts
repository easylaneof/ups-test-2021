import { css } from '@emotion/css';

export const container = css`
  border: 1px solid #dee4ff;
  border-radius: 14px;

  padding: 20px;
`;

export const row = css`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const left = css`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--blue);
  }
`;

export const address = css`
  display: block;

  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;

  color: #9397ae;
`;

export const text = css`
  color: var(--blue);
  font-size: 12px;

  margin-left: 10px;
  font-weight: 700;
`;

export const button = css`
  padding: 18px 24px;

  background: #edf0ff;
  border-radius: 11px;

  color: var(--blue);
`;

export const mb15 = css`
  margin-bottom: 15px;
`;

export const mb25 = css`
  margin-bottom: 25px;
`;
