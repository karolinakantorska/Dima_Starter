// layouts
import Layout from 'src/layouts';
// components
import Page from '../components/Page';

import LoadingScreen from 'src/components/LoadingScreen';
import FooterCom from 'src/components/_Reusable/FooterCom';

export default function Landing() {

  return (
    <Layout variant="fullScreen">
      <Page title="Loading">
        <LoadingScreen />
        <FooterCom />
      </Page>
    </Layout>

  );
}
