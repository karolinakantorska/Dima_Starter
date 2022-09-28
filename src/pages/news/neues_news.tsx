import Layout from "src/layouts"
import AuthGuard from "src/guards/AuthGuard";

import Page from "src/components/Page"
import NewsNewEditForm from "src/components/_News/NewEditNews/NewsNewEditForm";
import FooterCom from "src/components/_Reusable/FooterCom";

export default function NeuesNews() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`Neues News`}>
          <NewsNewEditForm isEdit={isEdit} />
          <FooterCom />
        </Page>
      </Layout>
    </AuthGuard>
  );
}
