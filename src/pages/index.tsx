

// components
import Page from '../components/Page';
import LandingVideo from 'src/components/_Main/LandingVideo';
import LandingButtonsCom from 'src/components/_Main/LandingButtonsCom';
import Layout from 'src/layouts';

// ----------------------------------------------------------------------
/*
Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="fullScreen" >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------

export default function Index() {

  return (
    <Layout variant="fullScreen" >
      <Page title="" style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}>
        <LandingVideo />
        <LandingButtonsCom />
      </Page>
    </Layout>

  )
}
/*
*/