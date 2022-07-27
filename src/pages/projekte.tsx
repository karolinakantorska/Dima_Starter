import { GetStaticProps } from "next";
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import { ProjectsListCom } from '../components/_Projekte/projectsListCom';
import { getOrderedCollection } from "src/utils/apis/apis";

// ----------------------------------------------------------------------

Projekte.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Projekte(props: any) {

  const { data } = props;
  return (

    <Page title="Projekte | Dima & Partner">
      <ProjectsListCom projectsList={data} />
    </Page>

  );
}
export const getStaticProps: GetStaticProps = async () => {

  const data = await getOrderedCollection("projects", "year");
  return {
    props: { data },
    revalidate: 1,
  };
};
