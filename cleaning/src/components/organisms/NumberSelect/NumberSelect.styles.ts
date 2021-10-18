import { css } from "@emotion/css";

export const container = css`
  display: flex;
  align-items: center;

  button:not(:last-child) {
    margin-right: 10px;
  }
`;

export const button = css`
  background-color: var(--ice-blue);

  span {
    color: var(--blue);
  }
`;

export const disabledButton = css`
  background-color: var(--disabled-background);

  span {
    color: var(--disabled-blue);
  }
`;

export const activeButton = css`
  background-color: var(--blue);

  span {
    color: var(--white);
  }
`;
