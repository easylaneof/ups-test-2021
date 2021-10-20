import { css } from '@emotion/css';

export const container = css`
  padding: 20px;

  width: 100%;
  resize: none;

  border: 1px solid #ebebff;

  color: #312e2c;
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 14px;
  line-height: 120%;

  box-shadow: 0 4px 50px rgba(223, 227, 229, 0.3);
  border-radius: 10px;

  ::placeholder {
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;

    color: #a29a98;
  }

  :focus {
    outline: none;
  }
`;
