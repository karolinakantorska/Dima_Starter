import { GetStaticProps } from "next";
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';

import { getOrderedCollection } from "src/utils/apis/apis";

import { JobsListCom } from 'src/components/_Job/JobsListCom';
import FooterCom from "src/components/_Reusable/FooterCom";


export default function Jobs(props: any) {
  const { data } = props;
  return (
    <Layout >
      <Page title="Jobs">
        <JobsListCom jobsList={data} />
        <FooterCom />
      </Page>
    </Layout>


  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("jobs", "announcment", "desc");
  return {
    props: { data },
  };
};