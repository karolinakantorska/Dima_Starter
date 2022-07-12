
// @mui

import { Box, Card, CardActionArea, CardActions, CardMedia, Link, Typography } from '@mui/material';

// hooks 
import useResponsive from '../../hooks/useResponsive';
import parse from 'html-react-parser';
import DimaLogoCom from '../DimaLogoCom';
import { useRouter } from 'next/router';
import zIndex from '@mui/material/styles/zIndex';



// TODO use location instead use route
export function WebcamsCardCom({ wcam }: { wcam: any }) {
  //const initialInputs = { param: "Alle" }
  const { id, title, end, url, url2 } = wcam;
  //const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  const isMiddle = useResponsive('down', 'md');
  const router = useRouter()
  //const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();


  return (
    <Card>
      <Box
        component='iframe'
        overflow='hidden'
        src={url}
        title={title}
        loading='lazy'
        scrolling="no"
        seamless
        sx={{
          pointerEvents: 'none',
          height: '280px',
          width: isMiddle ? isSmall ? '110%' : '140%' : '110%',
          borderColor: 'dima',
          border: 'none ',
          mt: '-90px',
          ml: '-4px'
        }}
        className="iFrame Container"
      >
        <p>Ihr Browser unterstützt keine iframes.</p>
      </Box>

      <Box sx={{ height: 70, pl: 2, pt: 1.65 }}>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'dima', }}
        >
          {`${title.toUpperCase()}`}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'text.secondary', }}
        >
          {`Im Bau - Realisierung Geplant Auf ${end.toString()}`}
        </Typography>
      </Box>

      <Link
        href={url}
        //target="_blank"
        rel="noopener"
        underline="none"
      >
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'text.primary',
            width: '100%',
            height: '100%',
            bottom: 0,
            cursor: 'pointer',
            opacity: 0,
            '&:hover': {
              opacity: 0.1,
            }
          }} />
      </Link>
    </Card >
  )
}
