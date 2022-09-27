// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { WebcamsListCom } from 'src/components/_Projekte/WebcamsListCom';
import { GetStaticProps } from 'next';
import { getOrderedCollection } from 'src/utils/apis/apis';

// ----------------------------------------------------------------------
/*
Webcams.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------

export default function Webcams(props: any) {
  const { data } = props;
  return (
    <Layout >
      <Page title="Webcams">
        <WebcamsListCom data={data} />
      </Page>
    </Layout>


  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("webcams", "date", "desc");
  return {
    props: { data },
  };
};