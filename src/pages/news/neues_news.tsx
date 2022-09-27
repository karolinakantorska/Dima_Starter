
import Page from "src/components/Page"
import NewsNewEditForm from "src/components/_News/NewEditNews/NewsNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

// ----------------------------------------------------------------------
/*
NeuesNews.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------

export default function NeuesNews() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`Neues News`}>
          <NewsNewEditForm isEdit={isEdit} />
        </Page>
      </Layout>

    </AuthGuard>
  );
}
