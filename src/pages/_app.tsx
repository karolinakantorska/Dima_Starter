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
import cookie from 'cookie';
import { ReactElement, ReactNode } from 'react';
// next
import { NextPage } from 'next';
import Head from 'next/head';
import App, { AppProps, AppContext } from 'next/app';
// utils
import { getSettings } from '../utils/getSettings';
// contexts
import { SettingsProvider } from '../contexts/SettingsContext';
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
// theme
import ThemeProvider from '../theme';
// components
import ThemeSettings from '../components/settings';
import { SettingsValueProps } from '../components/settings/type';
import ProgressBar from '../components/ProgressBar';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <CollapseDrawerProvider>
          <SettingsProvider defaultSettings={settings}>
            <MotionLazyContainer>
              <ThemeProvider>
                <ThemeSettings>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                </ThemeSettings>
              </ThemeProvider>
            </MotionLazyContainer>
          </SettingsProvider>
        </CollapseDrawerProvider>
      </AuthProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
