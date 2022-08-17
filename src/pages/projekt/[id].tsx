import type { GetStaticPaths, GetStaticProps } from "next";

// layouts
// components
import Page from '../../components/Page';


//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import Layout from '../../layouts';
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";

// ----------------------------------------------------------------------

Referenz.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Referenz({ data, params }: any) {
  return (
    <Page title={`Projekt`}>
      <OneProjectCom project={data} />
    </Page>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCollectionId("projects");
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("projects", id);
  return {
    props: { data },
    revalidate: 10,
  };
};