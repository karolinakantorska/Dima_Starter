// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { WebcamsListCom } from 'src/components/_Projekte/WebcamsListCom';

// ----------------------------------------------------------------------

Webcams.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Webcams() {
  return (

    <Page title="Webcams | Dima & Partner">
      <WebcamsListCom />
    </Page>

  );
}
