import { injectGlobal } from '@emotion/css';

import { palette } from './palette';
import { fonts } from './fonts';

injectGlobal`
  ${palette};
  ${fonts};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  #__next {
    min-height: 100vh;
  }

  @media screen and (max-width: 800px) {
    html {
      font-size: 14px;
    }
  }
`;
