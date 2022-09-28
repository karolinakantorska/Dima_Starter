import Layout from 'src/layouts';

import Page from 'src/components/Page';
import { PhilosophieCom } from 'src/components/_Dima/PhilosophieCom';
import FooterCom from 'src/components/_Reusable/FooterCom';

export default function Philosophie() {
  return (
    <Layout >
      <Page title="Philosophie">
        <PhilosophieCom />
        <FooterCom />
      </Page>
    </Layout>

  );
}
