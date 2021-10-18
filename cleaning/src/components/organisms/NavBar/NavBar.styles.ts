import { css } from '@emotion/css';

export const container = css`
  padding: 15px 20px;

  background-color: var(--ghost-white);
  border-radius: 15px;

  position: fixed;
  width: calc(100vw - 40px);
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }
`;

export const link = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  text: css`
    color: var(--vodka);
  `,
  icon: css`
    fill: var(--vodka);
  `,
  active: css`
    color: var(--blue);
    fill: var(--blue);
  `,
};
