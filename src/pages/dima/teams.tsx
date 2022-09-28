// layouts
import React from 'react';
import Layout from 'src/layouts';
import { GetStaticProps } from "next";
// components
import Page from 'src/components/Page';
import { getOrderedCollection } from "src/utils/apis/apis";
import { TeamListCom } from 'src/components/_Team/TeamListCom';
import FooterCom from 'src/components/_Reusable/FooterCom';

export default function Teams(props: any) {
  const { data } = props;
  //console.log('data: ', data)

  return (
    <Layout >
      <Page title="Teams">
        <TeamListCom teamList={data} />
        <FooterCom />
      </Page>
    </Layout>

  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("team", "displayOrder", "asc");
  return {
    props: { data },
  };
};