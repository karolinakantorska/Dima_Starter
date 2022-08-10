// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { ContactCom } from 'src/components/_Dima/ContactCom';
// ----------------------------------------------------------------------

Kontakt.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Kontakt() {
  return (
    <Page title="Kontakt">
      <ContactCom />
    </Page>

  );
}
