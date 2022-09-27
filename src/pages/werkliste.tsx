// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { GetStaticProps } from 'next';
import { getOrderedCollection } from 'src/utils/apis/apis';
import { WerklisteListCom } from 'src/components/_Projekte/WerklisteListCom';


// ----------------------------------------------------------------------
/*
Werkliste.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------
export default function Werkliste(props: any) {
  const { data } = props;
  return (
    <Layout >
      <Page title="Werkliste">
        <WerklisteListCom data={data} />
      </Page>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("listElement", "date", "desc");
  return {
    props: { data },
  };
};
