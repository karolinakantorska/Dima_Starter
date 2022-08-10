
// @mui
import { Box, } from '@mui/material';
import React from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { layoutHeader } from 'src/utils/dima';
import { jobs } from 'src/_mock/jobs/jobs';
// hooks

import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardEmptyJobCom } from './CardEmptyJobCom';
import { CardJobCom } from './CardJobCom';


// TODO use location instead use route
export function JobsListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'md');
  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.jobs} />
      <Box
        display="grid"
        gridTemplateColumns={isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)'}
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 7.5 }}
      >

        {jobs.map((job, i) => (
          <React.Fragment key={job.id}>
            <CardJobCom job={job} />
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
