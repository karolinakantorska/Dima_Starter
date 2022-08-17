
import type { GetStaticPaths, GetStaticProps } from "next";
import Page from "src/components/Page"
import { useRouter } from 'next/router';
// layouts
import Layout from "src/layouts"
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import AuthGuard from "src/guards/AuthGuard";
import PersonNewEditForm from "src/components/_Team/NewEdit/PersonNewEditForm";
import { useEffect, useState } from "react";
import LoadingScreen from "src/components/LoadingScreen";
// components
// ----------------------------------------------------------------------

PersonBearbeiten.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
// ----------------------------------------------------------------------
export default function PersonBearbeiten() {
  const isEdit = true;
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>(false);
  const ID = (typeof id === 'string') ? id : '';
  useEffect(() => {
    getCollectionDocument("team", ID).then((result) => { console.log(result); setData(result) });
  }, [])
  return (
    <AuthGuard>
      <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter`}>
        {data ? <PersonNewEditForm isEdit={isEdit} currentPerson={data} /> : <LoadingScreen />}
      </Page>
    </AuthGuard>
  );
}
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCollectionId("team");
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  //console.log(paths);
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("team", id);
  return {
    props: { data },
    revalidate: 60,
  };
};
*/