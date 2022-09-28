import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

import Layout from "src/layouts"
import AuthGuard from "src/guards/AuthGuard";

import { getCollectionDocument } from "src/utils/apis/apis";

import Page from "src/components/Page"
import LoadingScreen from "src/components/LoadingScreen";
import NewsNewEditForm from "src/components/_News/NewEditNews/NewsNewEditForm";
import FooterCom from "src/components/_Reusable/FooterCom";

// components

export default function NewsBearbeiten() {
  const isEdit = true;
  const [data, setData] = useState<any>(false);
  const router = useRouter();
  const { id } = router.query;
  const ID = (typeof id === 'string') ? id : '';
  useEffect(() => {
    getCollectionDocument("news", ID).then((result) => setData(result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthGuard>
      <Layout >
        <Page title={`Edit News`}>
          {data ? <NewsNewEditForm
            isEdit={isEdit}
            currentNews={data}
          /> : <LoadingScreen />}
          <FooterCom />
        </Page>
      </Layout>

    </AuthGuard>

  );
}
