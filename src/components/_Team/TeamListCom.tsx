
// @mui
import React, { useEffect, useState } from 'react';
import { Box, } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { Person } from 'src/utils/TS/interface';
// hooks
import useResponsive from '../../hooks/useResponsive';
import { useRouter } from 'next/router';
import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardPersonCom } from './CardPersonCom';
import { PATH_DIMA } from '../../routes/paths';
import { AlertCom } from '../_Reusable/AlertCom';

export function TeamListCom(
  { teamList, revalidate }: {
    teamList: Person[],
    revalidate: () => Promise<void>
  }) {
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        router.push(PATH_DIMA.teams);
      }, 2500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [succes]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 9000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  const isDesktop = useResponsive('up', 'lg');
  const isMiddle = useResponsive('up', 'lm');
  const isSmall = useResponsive('up', 'md');
  const gtc = isDesktop ? 'repeat(4, 1fr)' : isMiddle ? 'repeat(3, 1fr)' : isSmall ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'

  if (teamList.length > 0) {
    return (
      <>
        <SiteTitle text={layoutHeader.teams} />
        <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
        <Box
          display="grid"
          gridTemplateColumns={gtc}
          columnGap="11px"
          rowGap="20px"
          sx={{ mt: 6 }}
        >
          {teamList.map((person) => <CardPersonCom
            key={person.id}
            person={person}
            setSucces={setSucces}
            setLoading={setLoading}
            setError={setError}
            revalidate={revalidate}
          />)}
        </Box>
      </>
    )
  } else {
    return <p>Am moment gibt keine Mittarbeiter.</p>
  }

}
