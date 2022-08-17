
import type { GetStaticPaths, GetStaticProps } from "next";
import Page from "src/components/Page"
import { useRouter } from 'next/router';

import ProjectNewEditForm from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
// layouts
import Layout from "src/layouts"
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import AuthGuard from "src/guards/AuthGuard";
import { useState, useEffect } from "react";
import LoadingScreen from "src/components/LoadingScreen";

// components
// ----------------------------------------------------------------------

ProjektBearbeiten.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function ProjektBearbeiten() {
  const isEdit = true;
  const [data, setData] = useState<any>(false);
  const router = useRouter();
  const { id } = router.query;
  const ID = (typeof id === 'string') ? id : '';
  useEffect(() => {
    getCollectionDocument("projects", ID).then((result) => setData(result));
  }, [])

  return (
    <AuthGuard>
      <Page title={`Edit Projekt`}>
        {data ? <ProjectNewEditForm
          isEdit={isEdit}
          currentProject={data}
        /> : <LoadingScreen />}
      </Page>
    </AuthGuard>

  );
}

/*
<ProjectNewEditForm
          isEdit={isEdit}
          currentProject={data}
        />
        */
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCollectionId("projects");
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  //console.log(paths);
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("projects", id);
  //console.log('data:', data);
  return {
    props: { data },
    revalidate: 10,
  };
};
*/