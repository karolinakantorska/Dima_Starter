
// @mui

import { Box, } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { layoutHeader } from 'src/utils/dima';
import { Webcam } from 'src/utils/TS/interface';

// hooks
import useResponsive from '../../hooks/useResponsive';
import { AlertCom } from '../_Reusable/AlertCom';

import { SiteTitle } from '../_Reusable/SiteTitle';
import { WebcamsCardCom } from './WebcamsCardCom';

type Props = {
  data: Webcam[]
}

export function WebcamsListCom({ data }: Props) {

  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);
  const { reload } = useRouter();
  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'md');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();
  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
      }, 2500);
      reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [succes]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <>

      <SiteTitle text={layoutHeader.webcam} />
      <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
      <Box
        display="grid"
        gridTemplateColumns={gtc}
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 6 }}
      >
        {data && data.map((wcam) => (
          <WebcamsCardCom key={wcam.id} wcam={wcam} setSucces={setSucces} setLoading={setLoading} setError={setError} loading={loading} />
        ))}

      </Box>
    </>
  )
}
