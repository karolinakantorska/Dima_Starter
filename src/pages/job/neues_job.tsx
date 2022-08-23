
import Page from "src/components/Page"
import JobNewEditForm from "src/components/_Job/NewEditJob/JobNewEditForm";
import AuthGuard from "src/guards/AuthGuard";
import Layout from "src/layouts"

// ----------------------------------------------------------------------

NeuesJob.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NeuesJob() {
  const isEdit = false;
  return (
    <AuthGuard>
      <Page title={`Neues Jobinserat`}>
        <JobNewEditForm isEdit={isEdit} />
      </Page>
    </AuthGuard>
  );
}
