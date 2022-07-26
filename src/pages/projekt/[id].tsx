import type { GetStaticPaths, GetStaticProps } from "next";

// layouts
// components
import Page from '../../components/Page';


//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import Layout from '../../layouts';
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import FooterCom from "src/components/_Reusable/FooterCom";

// ----------------------------------------------------------------------

Referenz.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function Referenz({ data }: any) {
  //const router = useRouter();
  //const { id } = router.query;
  //console.log('id:', id);
  //console.log('project', project);
  return (
    <Page title={`Dima & Partner`}>
      <OneProjectCom project={data} />
      <FooterCom photoAuthor={data.photoAuthor} />
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