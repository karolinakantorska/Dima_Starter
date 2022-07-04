// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { TeamListCom } from 'src/components/_Dima/TeamListCom';

// ----------------------------------------------------------------------

Teams.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Teams() {
  return (
    <Page title="Teams | Dima & Partner">
      <TeamListCom />
    </Page>
  );
}

