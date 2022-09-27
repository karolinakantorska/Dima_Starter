import { useState, useEffect } from "react";
import Page from "src/components/Page"
import { useRouter } from 'next/router';
import Layout from "src/layouts"
import AuthGuard from "src/guards/AuthGuard";
import { getCollectionDocument } from "src/utils/apis/apis";
import LoadingScreen from "src/components/LoadingScreen";
import WebcamsNewEditForm from "src/components/_Projekte/NewEditWebcam/WebcamsNewEditForm";

// components
// ----------------------------------------------------------------------
/*
WebcamBearbeiten.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------
export default function WebcamBearbeiten() {
  const isEdit = true;
  const [data, setData] = useState<any>(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    const ID = (typeof id === 'string') ? id : '';
    getCollectionDocument("webcams", ID).then((result) => setData(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthGuard>
      <Layout >
        <Page title={`Edit Webcam`}>
          {data ? <WebcamsNewEditForm
            isEdit={isEdit}
            currentWebcam={data}
          /> : <LoadingScreen />}
        </Page>
      </Layout>

    </AuthGuard>

  );
}
