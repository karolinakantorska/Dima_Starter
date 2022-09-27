// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import LoginForm from 'src/components/_signin/LoginForm';
// ----------------------------------------------------------------------
/*
Anmelden.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
*/
// ----------------------------------------------------------------------
export default function Anmelden() {
  return (
    <Layout >
      <Page title="Anmelden">
        <LoginForm />
      </Page>
    </Layout>

  );
}

