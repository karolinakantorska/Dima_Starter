import { GetStaticProps } from "next";
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import { ProjectsListCom } from '../components/_Projekte/ProjectsListCom';
import { getOrderedCollection } from "src/utils/apis/apis";

// ----------------------------------------------------------------------

Werkliste.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Werkliste(props: any) {

  const { data } = props;
  return (

    <Page title="Werkliste | Dima & Partner">
      <p>Werkliste</p>
    </Page>

  );
}
export const getStaticProps: GetStaticProps = async () => {

  const data = await getOrderedCollection("projects", "year");
  return {
    props: { data },
    revalidate: 10,
  };
};
