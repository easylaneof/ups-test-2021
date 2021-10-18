import { css } from '@emotion/css';

export const container = css``;

export const top = css`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  margin-bottom: 110px;

  button:first-of-type {
    margin-right: 35px;
  }
`;

export const tabItem = css`
  background: none;
  border: 0;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }
`;

export const tabItemText = css`
  color: var(--lavender);
`;

export const active = css`
  color: var(--blue);
  position: relative;

  &::after {
    content: '';

    position: absolute;
    bottom: -3px;
    left: 50%;
    border-radius: 26px;
    transform: translateX(-50%);

    background-color: var(--blue);

    height: 3px;
    width: 15px;
  }
`;

export const content = css``;
