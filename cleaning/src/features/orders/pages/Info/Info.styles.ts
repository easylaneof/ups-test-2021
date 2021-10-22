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

  padding-bottom: 100px;
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

export const month = css`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const swiper = css`
  width: 100%;

  margin-bottom: 32px;

  position: relative;

  ::after {
    content: '';

    pointer-events: none;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    height: 60px;
    width: 60px;

    padding: 1px;

    border: 3px solid var(--blue);
    border-radius: 15px;

    z-index: 5;
  }
`;

export const date = css`
  width: 60px;
  height: 60px;
  background: #edf0ff;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const day = css`
  color: var(--blue);
`;

export const payButton = css`
  width: 100%;
  background: #edf0ff;
  border-radius: 13px;

  padding: 20px;

  span {
    color: var(--blue);
  }
`;

export const blackPayButton = css`
  width: 100%;
  background: var(--black);
  border-radius: 13px;

  margin-bottom: 10px;

  height: 60px;
`;

export const applePay = css`
  background-image: url('/apple_pay.png');
  background-size: 100%;
  background-position: center;
`;

export const googlePay = css`
  background-image: url('/google_pay.png');
  background-size: 100%;
  background-position: center;
`;
