import { ReactElement } from 'react';
// layouts
import Layout from 'src/layouts';
// components
import Page from '../components/Page';

import LoadingScreen from 'src/components/LoadingScreen';
// ----------------------------------------------------------------------

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="fullScreen">{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Landing() {

  return (
    <Page title="Loading">
      <LoadingScreen />
    </Page>
  );
}
