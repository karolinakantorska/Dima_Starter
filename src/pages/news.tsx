import { ReactElement } from 'react';
import { NewsListCom } from 'src/components/_News/NewsListCom';
// layouts
import Layout from 'src/layouts';
// components
import Page from '../components/Page';



// ----------------------------------------------------------------------

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function News() {
  return (
    <Page title="News">
      <NewsListCom />
    </Page>
  );
}

