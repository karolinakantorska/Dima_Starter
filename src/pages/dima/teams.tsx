// layouts
import React from 'react';
import Layout from 'src/layouts';
import { GetStaticProps } from "next";
// components
import Page from 'src/components/Page';
import { getOrderedCollection } from "src/utils/apis/apis";
import { TeamListCom } from 'src/components/_Team/TeamListCom';

// ----------------------------------------------------------------------

Teams.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Teams(props: any) {
  const { data } = props;
  //console.log('data: ', data)

  return (
    <Page title="Teams">
      <TeamListCom teamList={data} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getOrderedCollection("team", "displayOrder");
  return {
    props: { data },
    //revalidate: 60,
  };
};