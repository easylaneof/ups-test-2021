import { css } from '@emotion/css';

export const header = css`
  height: 135px;

  display: flex;
  align-items: flex-end;

  padding: 0 20px 20px 20px;

  margin-bottom: 24px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: #f8f8ff;
`;

export const row = css`
  display: flex;
  align-items: center;
`;

export const back = css`
  background-color: var(--ice-blue);
  margin-right: 20px;

  svg {
    fill: none;
    stroke: var(--blue);
  }
`;

export const description = css`
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--independence);
    margin-bottom: 5px;
  }

  span {
    color: var(--caption);
    font-size: 12px;
  }

  svg {
    fill: var(--blue);
  }
`;

export const serviceName = css`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 5px;
    margin-bottom: 0;
  }
`;
