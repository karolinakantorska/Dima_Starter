
import Page from "src/components/Page"
import WebcamsNewEditForm from "src/components/_Projekte/NewEditWebcam/WebcamsNewEditForm";

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
        <WebcamsNewEditForm />
      </Page>
    </AuthGuard>
  );
}
