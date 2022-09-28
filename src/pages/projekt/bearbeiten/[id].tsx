
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
// layouts
import Layout from "src/layouts"
import AuthGuard from "src/guards/AuthGuard";

import { getCollectionDocument } from "src/utils/apis/apis";

// components
import ProjectNewEditForm from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import Page from "src/components/Page"
import LoadingScreen from "src/components/LoadingScreen";
import FooterCom from "src/components/_Reusable/FooterCom";

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
          <FooterCom />
        </Page>
      </Layout>

    </AuthGuard>

  );
}
