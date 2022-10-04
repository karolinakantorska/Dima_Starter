import type { GetStaticPaths, GetStaticProps } from "next";

// layouts
// components
import Page from '../../components/Page';


//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import Layout from '../../layouts';
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import FooterCom from "src/components/_Reusable/FooterCom";



export default function Referenz({ data, params }: any) {
  return (
    <Layout >
      <Page title={`Projekt`}>
        <OneProjectCom project={data} />
        <FooterCom />
      </Page>
    </Layout>

  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCollectionId("projects");
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async ({ params, req, res }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("projects", id);
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: { data },
  };
};