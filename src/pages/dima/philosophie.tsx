import Layout from 'src/layouts';

import Page from 'src/components/Page';

// ----------------------------------------------------------------------

Philosophie.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function Philosophie() {
  return (
    <Page title="Philosophie">
      <p>Philosophie</p>
    </Page>
  );
}
