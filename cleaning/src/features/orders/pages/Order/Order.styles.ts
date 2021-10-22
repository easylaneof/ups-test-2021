import { css } from '@emotion/css';

export const container = css`
  background: url('/map.png') top center;
  background-size: 100% 400px;
  background-repeat: no-repeat;

  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 175px 20px 20px 20px;
  }
`;

export const title = css`
  margin-top: 32px;
  width: 100%;
`;

export const subTitle = css`
  margin-top: 25px;
  margin-bottom: 5px;

  font-size: 14px;

  width: 100%;
`;

export const text = css`
  color: #a4a8bc;
  margin-bottom: 20px;

  width: 100%;
`;
