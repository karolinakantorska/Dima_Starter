
import Page from "src/components/Page"

import ProjectNewEditForm from "src/components/_Projekte/NewEditProjekt/ProjectNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

// ----------------------------------------------------------------------

NeuesWebcam.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NeuesWebcam() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Page title={`Neues Webcam`}>
        <p>Add Webcam Form</p>
      </Page>
    </AuthGuard>
  );
}
