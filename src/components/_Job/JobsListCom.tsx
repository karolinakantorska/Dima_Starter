
// @mui
import { Box, } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { layoutHeader } from 'src/utils/dima';
import { Job } from 'src/utils/TS/interface';
import { AlertCom } from '../_Reusable/AlertCom';
// hooks

import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardEmptyJobCom } from './CardEmptyJobCom';
import { CardJobCom } from './CardJobCom';


// TODO use location instead use route
export function JobsListCom(
  { jobsList }: {
    jobsList: Job[],
  }) {

  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);
  const isDesktop = useResponsive('up', 'md');
  const isSmall = useResponsive('down', 'sm');
  const router = useRouter();

  useEffect(() => {
    const changed = localStorage.getItem('jobs');
    if (changed === 'jobs') {
      localStorage.removeItem('jobs');
      router.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        router.reload();
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [succes]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 9000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);


  return (
    <>
      <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
      <SiteTitle text={layoutHeader.jobs} />

      <Box
        display="grid"
        gridTemplateColumns={isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)'}
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 7.5 }}
      >

        {jobsList.map((job, i) => (
          <React.Fragment key={job.id}>
            <CardJobCom
              job={job}
              setSucces={setSucces}
              setLoading={setLoading}
              setError={setError}
            />
            {isDesktop && <CardEmptyJobCom />}
          </React.Fragment>

        ))}
        <CardEmptyJobCom />
        {!isSmall && <><CardEmptyJobCom />
          <CardEmptyJobCom />
          <CardEmptyJobCom color='background.default' />
          <CardEmptyJobCom /></>}
      </Box>
    </>
  )
}
