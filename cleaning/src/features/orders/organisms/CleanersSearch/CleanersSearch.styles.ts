import { css } from '@emotion/css';

export const container = css`
  width: calc(100% - 60px);

  background: #f8f8ff;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  padding: 20px;
`;

export const icon = css`
  width: 48px;
  height: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fcfcfc;
  box-shadow: 0 4px 50px rgba(223, 227, 229, 0.3);
  border-radius: 10px;

  svg {
    fill: var(--blue);
  }

  margin-bottom: 20px;
`;
