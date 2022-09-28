// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import LoginForm from 'src/components/_signin/LoginForm';
import FooterCom from 'src/components/_Reusable/FooterCom';

export default function Anmelden() {
  return (
    <Layout >
      <Page title="Anmelden">
        <LoginForm />
        <FooterCom />
      </Page>
    </Layout>

  );
}

