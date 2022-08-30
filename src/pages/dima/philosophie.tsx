import Layout from 'src/layouts';

import Page from 'src/components/Page';
import { PhilosophieCom } from 'src/components/_Dima/PhilosophieCom';

// ----------------------------------------------------------------------

Philosophie.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function Philosophie() {
  return (
    <Page title="Philosophie">
      <PhilosophieCom />
    </Page>
  );
}
