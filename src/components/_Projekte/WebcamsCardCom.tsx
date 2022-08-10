
// @mui

import { Box, Card, Link } from '@mui/material';

// hooks 
import useResponsive from '../../hooks/useResponsive';
import { BodyTextCom } from '../_Reusable/BodyTextCom';
import { TitleTextCom } from '../_Reusable/TitleTextCom';

// TODO use location instead use route
export function WebcamsCardCom({ wcam }: { wcam: any }) {
  //const initialInputs = { param: "Alle" }
  const { title, end, url, } = wcam;
  //const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  const isMiddle = useResponsive('down', 'md');
  //const router = useRouter()
  //const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();
  const propsContainer = {
    boxSizing: 'border-box',
    //border: '5px solid red',
    display: 'grid',
    gridAutoRows: 'auto 70px'
  };
  const propsIFrameContainer = {
    height: isMiddle ? isSmall ? '250px' : '380px' : '280px',
  };
  const propsIFrame = {
    pointerEvents: 'none',
    height: '180%',
    width: '180%',
    overflow: 'hidden',
    mt: '-30%',
    ml: '-25%'
  };
  const propsCard = {
    pl: 2.25, pt: 1.60, pb: 1.1
  };
  const LinkEvent = () =>
  (<Link
    href={url}
    //target="_blank"
    rel="noopener"
    underline="none"
  >
    <Box
      sx={{
        position: 'absolute',
        backgroundColor: 'text.white',
        width: '100%',
        height: '100%',
        bottom: 0,
        cursor: 'pointer',
        opacity: 0,
        ariaLabel: `Link zum ${title} Baucam`,
        '&:hover': {
          opacity: 0.1,
        }
      }} />
  </Link>)

  return (
    <>
      <Card sx={{ ...propsContainer }}>
        <Box sx={{ ...propsIFrameContainer }}>
          <Box
            component='iframe'
            src={url}
            title={title}
            loading='lazy'
            scrolling="no"
            seamless
            sx={{ ...propsIFrame }}
            className="iFrame Container"
          >
            <p>Ihr Browser unterstützt keine iframes.</p>
          </Box>
        </Box>

        <Card sx={{ ...propsCard }}>
          <TitleTextCom text={`${title.toUpperCase()}`} />
          <BodyTextCom text={`Im Bau - Realisierung Geplant Auf ${end.toString()}`} />
        </Card>
        <LinkEvent />
      </Card >
    </>

  )
}
