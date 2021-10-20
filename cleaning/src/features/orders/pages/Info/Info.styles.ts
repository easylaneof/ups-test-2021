import { css } from '@emotion/css';

export const container = css`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
  }
`;

export const progress = css`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 32px;

  > *:not(:last-child) {
    margin-right: 13px;
  }
`;

export const stage = css`
  color: #c6c9df;
`;

export const activeStage = css`
  color: var(--blue);
`;

export const split = css`
  width: 20px;
  height: 2px;

  background: #c6c9df;
  border-radius: 10px;
`;

export const stageContainer = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const map = css`
  background-color: var(--old-lace);

  border-radius: 15px;

  padding: 20px 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  svg {
    margin-right: 5px;
    fill: var(--ochre);
  }

  span {
    color: var(--ochre);
  }
`;

export const or = css`
  color: #a0a4c1;

  text-align: center;

  margin: 24px 0;
`;

export const mb = css`
  margin-bottom: 12px;
`;

export const twoInputs = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;

  width: 100%;

  margin-bottom: 12px;
`;

export const nextButton = css`
  width: calc(100% - 40px);

  padding: 20px 0;

  color: white;
  text-transform: uppercase;
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;

  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  background-color: var(--blue);
`;

export const title = css`
  margin-bottom: 40px;

  text-align: center;
`;

export const date = css`
  font-size: 14px;
  margin-bottom: 20px;
`;
