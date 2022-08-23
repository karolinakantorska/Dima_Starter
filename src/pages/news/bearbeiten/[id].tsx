import { useState, useEffect } from "react";
import Page from "src/components/Page"
import { useRouter } from 'next/router';
import Layout from "src/layouts"
import AuthGuard from "src/guards/AuthGuard";
import { getCollectionDocument } from "src/utils/apis/apis";
import LoadingScreen from "src/components/LoadingScreen";
import NewsNewEditForm from "src/components/_News/NewEditNews/NewsNewEditForm";

// components
// ----------------------------------------------------------------------

NewsBearbeiten.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function NewsBearbeiten() {
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
      <Page title={`Edit News`}>
        {data ? <NewsNewEditForm
          isEdit={isEdit}
          currentProject={data}
        /> : <LoadingScreen />}
      </Page>
    </AuthGuard>

  );
}
