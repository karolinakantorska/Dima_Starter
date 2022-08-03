import Page from "src/components/Page"
import PersonNewEditForm from "src/components/_Team/NewEdit/PersonNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"
// ----------------------------------------------------------------------

NeueMitarbeiter.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function NeueMitarbeiter() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Page title={`${isEdit ? 'Edit' : 'Neues'} Mitarbeiter | Dima & Partner`}>
        <PersonNewEditForm />
      </Page>
    </AuthGuard>
  );
}
