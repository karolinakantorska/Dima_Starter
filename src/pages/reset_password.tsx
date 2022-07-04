// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import PassResetFormCom from 'src/components/_signin/PassResetFormCom';

// ----------------------------------------------------------------------

ResetPass.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ResetPass() {
  return (

    <Page title="Dima & Partner">

      <PassResetFormCom />

    </Page>

  );
}

