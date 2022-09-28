import { GetStaticProps } from 'next';
import { NewsListCom } from 'src/components/_News/NewsListCom';
import FooterCom from 'src/components/_Reusable/FooterCom';
// layouts
import Layout from 'src/layouts';
import { getOrderedCollection } from 'src/utils/apis/apis';
// components
import Page from '../components/Page';

export default function News(props: any) {
  const { data } = props;
  return (
    <Layout >
      <Page title="News">
        <NewsListCom news={data} />
        <FooterCom />
      </Page>
    </Layout>

  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("news", "date", "desc");
  return {
    props: { data },
  };
};