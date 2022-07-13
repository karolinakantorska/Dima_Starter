import { ReactElement } from 'react';
// layouts
import Layout from 'src/layouts';
// components
import Page from '../components/Page';

import { NewsListCom } from 'src/components/_Dima/NewsListCom';

// ----------------------------------------------------------------------

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function News() {
  return (
    <Page title="News | Dima & Partner">
      <NewsListCom />
    </Page>
  );
}

