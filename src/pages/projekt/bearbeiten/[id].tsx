import Page from "src/components/Page"
import { useRouter } from 'next/router';

import ProjectNewEditForm from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
// layouts
import Layout from "src/layouts"
import { getCollectionDocument } from "src/utils/apis/apis";
import AuthGuard from "src/guards/AuthGuard";
import { useState, useEffect } from "react";
import LoadingScreen from "src/components/LoadingScreen";

// components
// ----------------------------------------------------------------------
/*
ProjektBearbeiten.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------
export default function ProjektBearbeiten() {
  const isEdit = true;
  const [data, setData] = useState<any>(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    const ID = (typeof id === 'string') ? id : '';
    getCollectionDocument("projects", ID).then((result) => setData(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthGuard>
      <Layout >
        <Page title={`Edit Projekt`}>
          {data ? <ProjectNewEditForm
            isEdit={isEdit}
            currentProject={data}
          /> : <LoadingScreen />}
        </Page>
      </Layout>

    </AuthGuard>

  );
}
