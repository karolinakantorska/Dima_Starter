// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { ContactCom } from 'src/components/_Dima/ContactCom';
import FooterCom from 'src/components/_Reusable/FooterCom';


export default function Kontakt() {
  return (
    <Layout >
      <Page title="Kontakt">
        <ContactCom />
        <FooterCom />
      </Page>
    </Layout>


  );
}
