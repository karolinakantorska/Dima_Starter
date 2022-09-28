// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import PassResetFormCom from 'src/components/_signin/PassResetFormCom';
import FooterCom from 'src/components/_Reusable/FooterCom';

export default function ResetPass() {
  return (
    <Layout >
      <Page title="Reset Password">
        <PassResetFormCom />
        <FooterCom />
      </Page>
    </Layout>
  );
}

