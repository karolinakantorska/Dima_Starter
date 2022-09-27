// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

// ----------------------------------------------------------------------
/*
Unternehmung.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------
export default function Unternehmung() {
  return (
    <Layout >
      <Page title="Unternehmung">

        <p>Unternehmung</p>

      </Page>
    </Layout>
  );
}
