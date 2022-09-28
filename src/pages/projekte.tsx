import { GetStaticProps } from "next";
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { ProjectsListCom } from 'src/components/_Projekte/projectsListCom';
import { getOrderedCollection } from "src/utils/apis/apis";
import FooterCom from "src/components/_Reusable/FooterCom";

export default function List(props: any) {
  const { data } = props;
  return (
    <Layout >
      <Page title="Projekte">
        <ProjectsListCom projectsList={data} />
        <FooterCom />
      </Page>
    </Layout>


  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("projects", "year", "desc");
  return {
    props: { data },
  };
};
