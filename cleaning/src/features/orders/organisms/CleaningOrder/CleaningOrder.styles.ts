import { css } from '@emotion/css';

export const container = css`
  background-color: var(--ice-blue);
  border-radius: 20px;
  padding: 20px;

  height: 465px;

  position: relative;
`;

export const woman = css`
  position: absolute;
  top: -80px;
  left: 42.5%;
  transform: translateX(-50%);

  width: 350px;

  z-index: 5;
`;

export const content = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 40px);

  z-index: 10;

  background-color: var(--white);

  border-radius: 15px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const centeredColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  width: 100%;
`;

export const mb = css`
  margin-bottom: 32px;
`;

export const heading = css`
  color: var(--arsenic);
  margin-bottom: 12px;
`;

export const description = css`
  color: var(--text);
`;

export const price = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
    fill: var(--orange);
  }

  h3 {
    color: var(--independence);
  }
`;

export const button = css`
  width: 100%;
  background-color: var(--blue);
  border-radius: 11px;
  padding: 18px 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--white);
    margin-right: 5px;
  }

  svg {
    stroke: var(--white);
    fill: none;
  }
`;
