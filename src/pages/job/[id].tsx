//import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
// layouts
// components
import Page from '../../components/Page';

//import { _mockProjekts } from '../../_mock/referenzen/referenzen';
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import Layout from '../../layouts';

import { jobs } from "src/_mock/jobs/jobs";

import { OneJobCom } from "src/components/_Job/OneJobCom";
// ----------------------------------------------------------------------

Job.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function Job({ data }: any) {
  const router = useRouter();
  const { id } = router.query;

  const job = jobs.filter((job) => job.id === id);

  if (id) {
    return (
      <Page title={`Job`}>
        <OneJobCom job={job[0]} />
      </Page>
    );
  } else {
    return (
      <p>wait...</p>
    )

  }

}

