import React, { useEffect, useState } from 'react';
import { Box, } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { Person } from 'src/utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { useRouter } from 'next/router';
import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardPersonCom } from './CardPersonCom';
import { AlertCom } from '../_Reusable/AlertCom';
import { useContext } from 'react';
import { ReloadContext } from 'src/contexts/RevalidateContext';

export function TeamListCom(
  { teamList }: {
    teamList: Person[],

  }) {
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();



  useEffect(() => {
    const changed = localStorage.getItem('teams');
    if (changed === 'teams') {
      localStorage.removeItem('teams');
      router.reload();
    }
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
          />)}
        </Box>
      </>
    )
  } else {
    return <p>Am moment gibt keine Mittarbeiter.</p>
  }

}
