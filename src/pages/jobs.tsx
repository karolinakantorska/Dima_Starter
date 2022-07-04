// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { JobsListCom } from 'src/components/_Dima/JobsListCom';

// ----------------------------------------------------------------------

Jobs.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Jobs() {
  return (

    <Page title="Jobs | Dima & Partner">
      <JobsListCom />
    </Page>

  );
}
