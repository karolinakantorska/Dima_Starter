// scroll bar
import 'simplebar/src/simplebar.css';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
//Auth
import { AuthProvider } from '../contexts/FirebaseContext';
import { ReactElement, ReactNode } from 'react';
import { AnimatePresence, m } from 'framer-motion';
// next
import { NextPage } from 'next';
import Head from 'next/head';
import App, { AppProps, } from 'next/app';
// @mui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// utils
// contexts

import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
// theme
import ThemeProvider from '../theme';
// components

import ProgressBar from '../components/ProgressBar';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';


// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp(
  props: MyAppProps
) {
  const { Component, pageProps, router } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CollapseDrawerProvider>

            <MotionLazyContainer>
              <ThemeProvider>

                <m.div>
                  <ProgressBar />
                  <AnimatePresence
                    exitBeforeEnter={false}
                  >
                    {getLayout(<Component
                      {...pageProps}
                      key={router.route}
                    />)}
                  </AnimatePresence>
                </m.div>

              </ThemeProvider>
            </MotionLazyContainer>

          </CollapseDrawerProvider>
        </LocalizationProvider>
      </AuthProvider>
    </>
  );
}

