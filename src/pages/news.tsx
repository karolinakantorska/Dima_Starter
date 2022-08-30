import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { NewsListCom } from 'src/components/_News/NewsListCom';
// layouts
import Layout from 'src/layouts';
import { getOrderedCollection } from 'src/utils/apis/apis';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function News(props: any) {
  const { data } = props;
  return (
    <Page title="News">
      <NewsListCom news={data} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("news", "date", "desc");
  return {
    props: { data },
  };
};