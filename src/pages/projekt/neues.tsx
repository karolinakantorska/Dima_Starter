
import Page from "src/components/Page"

import ProjectNewEditForm from "src/components/_Projekte/ProjectNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"



export default function NeuesProjekt() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout>
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Projekt | Dima & Partner`}>
          <ProjectNewEditForm isEdit={isEdit} />
        </Page>
      </Layout>
    </AuthGuard>

  );
}
