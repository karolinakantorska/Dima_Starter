
import Page from "src/components/Page"

import ProjectNewEditForm from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

// ----------------------------------------------------------------------
/*
NeuesProjekt.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------

export default function NeuesProjekt() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`Neues Projekt`}>
          <ProjectNewEditForm isEdit={isEdit} />
        </Page>
      </Layout>

    </AuthGuard>
  );
}
