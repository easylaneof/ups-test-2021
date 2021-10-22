import React from 'react';

import '../styles/main';

import 'swiper/css';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
