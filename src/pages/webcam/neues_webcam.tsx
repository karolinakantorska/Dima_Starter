
import Page from "src/components/Page"
import WebcamsNewEditForm from "src/components/_Projekte/NewEditWebcam/WebcamsNewEditForm";
import FooterCom from "src/components/_Reusable/FooterCom";

import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"


export default function NeuesWebcam() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`Neues Webcam`}>
          <WebcamsNewEditForm />
          <FooterCom />
        </Page>
      </Layout>

    </AuthGuard>
  );
}
