import { css } from '@emotion/css';

export const container = css`
  background: none;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export const square = css`
  width: 60px;
  height: 60px;

  border-radius: 15px;
`;
