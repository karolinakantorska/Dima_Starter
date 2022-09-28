import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
// layouts
import Layout from "src/layouts"
import AuthGuard from "src/guards/AuthGuard";
import { getCollectionDocument } from "src/utils/apis/apis";

import Page from "src/components/Page"
import PersonNewEditForm from "src/components/_Team/NewEdit/PersonNewEditForm";

import LoadingScreen from "src/components/LoadingScreen";
import FooterCom from "src/components/_Reusable/FooterCom";
// components

export default function PersonBearbeiten() {
  const isEdit = true;
  const router = useRouter();
  const [data, setData] = useState<any>(false);
  useEffect(() => {
    const { id } = router.query;
    const ID = (typeof id === 'string') ? id : '';
    getCollectionDocument("team", ID).then((result) => { console.log(result); setData(result) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <AuthGuard>
      <Layout >
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter`}>
          {data ? <PersonNewEditForm isEdit={isEdit} currentPerson={data} /> : <LoadingScreen />}
          <FooterCom />s
        </Page>
      </Layout>

    </AuthGuard>
  );
}
