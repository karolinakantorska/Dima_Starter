// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { WebcamsListCom } from 'src/components/_Projekte/WebcamsListCom';
import { GetStaticProps } from 'next';
import { getOrderedCollection } from 'src/utils/apis/apis';
import FooterCom from 'src/components/_Reusable/FooterCom';


export default function Webcams(props: any) {
  const { data } = props;
  return (
    <Layout >
      <Page title="Webcams">
        <WebcamsListCom data={data} />
        <FooterCom />
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