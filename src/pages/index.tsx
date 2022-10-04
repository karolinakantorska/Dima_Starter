

// components
import Page from '../components/Page';
import Layout from 'src/layouts';
import LandingPage from 'src/components/_Main/LandingPage';
import { GetStaticProps } from 'next';

export default function Index() {

  return (
    <Layout variant="fullScreen" >
      <Page title="" style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}>
        <LandingPage />
      </Page>
    </Layout>

  )
}
