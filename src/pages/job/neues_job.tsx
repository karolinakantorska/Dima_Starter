
import Page from "src/components/Page"
import JobNewEditForm from "src/components/_Job/NewEditJob/JobNewEditForm";
import FooterCom from "src/components/_Reusable/FooterCom";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"


export default function NeuesJob() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`Neues Jobinserat`}>
          <JobNewEditForm isEdit={isEdit} />
          <FooterCom />
        </Page>
      </Layout>

    </AuthGuard>
  );
}
