import { GetStaticProps } from "next";
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { ProjectsListCom } from 'src/components/_Projekte/projectsListCom';
import { getOrderedCollection } from "src/utils/apis/apis";

// ----------------------------------------------------------------------

List.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function List(props: any) {
  const { data } = props;
  return (
    <Page title="Projekte">
      <ProjectsListCom projectsList={data} />
    </Page>

  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("projects", "year", "desc");
  return {
    props: { data },
  };
};
