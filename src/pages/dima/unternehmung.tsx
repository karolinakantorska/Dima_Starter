// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import FooterCom from 'src/components/_Reusable/FooterCom';
import { CompanyCom } from 'src/components/_Dima/CompanyCom';


export default function Unternehmung() {
  return (
    <Layout >
      <Page title="Unternehmung">
        <CompanyCom />
        <FooterCom />
      </Page>
    </Layout>
  );
}
