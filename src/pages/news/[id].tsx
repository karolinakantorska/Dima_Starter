import { useRouter } from 'next/router';
import Page from '../../components/Page';
import Layout from '../../layouts';
// ----------------------------------------------------------------------
/*
News.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------
export default function News({ data }: any) {
  const router = useRouter();
  const { id } = router.query;

  if (id) {
    return (
      <Layout >
        <Page title={`Job`}>
          <p>One News ?</p>
        </Page>
      </Layout>

    );
  } else {
    return (
      <p>wait...</p>
    )
  }
}

