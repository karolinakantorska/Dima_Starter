// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import LoginForm from 'src/components/_signin/LoginForm';

export default function Anmelden() {
  return (
    <Layout>
      <Page title="Anmelden | Dima & Partner">
        <LoginForm />
      </Page>
    </Layout>
  );
}

