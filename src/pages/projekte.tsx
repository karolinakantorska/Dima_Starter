import { GetStaticProps } from "next";
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { ProjectsListCom } from 'src/components/_Projekte/ProjectsListCom';
import { getOrderedCollection } from "src/utils/apis/apis";

// ----------------------------------------------------------------------

Projekte.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Projekte(props: any) {
  const { data } = props;
  return (
    <Page title="Projekte">
      <ProjectsListCom projectsList={data} />
    </Page>

  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("projects", "year");
  return {
    props: { data },
  };
};
