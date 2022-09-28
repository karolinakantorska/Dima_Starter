import Page from "src/components/Page"
import FooterCom from "src/components/_Reusable/FooterCom";
import PersonNewEditForm from "src/components/_Team/NewEdit/PersonNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

export default function NeueMitarbeiter() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Layout >
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter`}>
          <PersonNewEditForm />
          <FooterCom />
        </Page>
      </Layout>

    </AuthGuard>
  );
}
