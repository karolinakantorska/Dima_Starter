import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"
import Page from "src/components/Page"

import ProjectNewEditForm from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import FooterCom from "src/components/_Reusable/FooterCom";


export default function NeuesProjekt() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`Neues Projekt`}>
          <ProjectNewEditForm isEdit={isEdit} />
          <FooterCom />
        </Page>
      </Layout>

    </AuthGuard>
  );
}
