import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
import Page from '../../components/Page';
import Layout from '../../layouts';
import { OneJobCom } from "src/components/_Job/OneJobCom";
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import LoadingScreen from "src/components/LoadingScreen";
import FooterCom from "src/components/_Reusable/FooterCom";

export default function Job({ data }: any) {
  const router = useRouter();
  const { id } = router.query;

  if (id) {
    return (
      <Layout >
        <Page title={`Job`}>
          <OneJobCom job={data} />
          <FooterCom />
        </Page>
      </Layout>

    );
  } else {
    return (
      <LoadingScreen />
    )
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCollectionId("jobs");
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("jobs", id);
  return {
    props: { data },
  };
};
