import Page from "src/components/Page"
import { useRouter } from 'next/router';
// layouts
import Layout from "src/layouts"
import { getCollectionDocument } from "src/utils/apis/apis";
import AuthGuard from "src/guards/AuthGuard";
import PersonNewEditForm from "src/components/_Team/NewEdit/PersonNewEditForm";
import { useEffect, useState } from "react";
import LoadingScreen from "src/components/LoadingScreen";
// components
// ----------------------------------------------------------------------

PersonBearbeiten.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
// ----------------------------------------------------------------------
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
      <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter`}>
        {data ? <PersonNewEditForm isEdit={isEdit} currentPerson={data} /> : <LoadingScreen />}
      </Page>
    </AuthGuard>
  );
}
