
// @mui

import { Box, Card, CardActions, Typography } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { webcams } from 'src/_mock/webcams/webcams';

// hooks
import useResponsive from '../../hooks/useResponsive';

import { SiteTitle } from '../_Reusable/SiteTitle';
import { WebcamsCardCom } from './WebcamsCardCom';


// TODO use location instead use route
export function WebcamsListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.webcam} />
      <Box
        display="grid"
        gridTemplateColumns={gtc}
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 6 }}
      >
        {webcams.map((wcam) => (
          <WebcamsCardCom key={wcam.id} wcam={wcam} />
        ))}

      </Box>
    </>
  )
}
