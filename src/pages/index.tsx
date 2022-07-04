import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from 'src/layouts';
// components
import Page from '../components/Page';
import LandingVideo from 'src/components/_Main/LandingVideo';
import LandingButtonsCom from 'src/components/_Main/LandingButtonsCom';
// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();


  return (
    <Layout>
      <Page title="Kontakt | Dima & Partner">
        <LandingVideo />
        <LandingButtonsCom />
      </Page>
    </Layout>
  )
}
/*
  useEffect(() => {
    if (router.pathname == '/') {
      router.push('/dashboard/one');
    }
  });
  return null;
  */