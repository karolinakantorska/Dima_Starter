import { useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import Page from '../components/Page';
import LandingVideo from 'src/components/_Main/LandingVideo';
import LandingButtonsCom from 'src/components/_Main/LandingButtonsCom';
import Layout from 'src/layouts';
// ----------------------------------------------------------------------

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="fullScreen" >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  return (

    <Page title="Kontakt | Dima & Partner">
      <LandingVideo />
      <LandingButtonsCom />
    </Page>

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