
// @mui

import { Box, Card, CardActionArea, CardActions, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { layoutHeader } from 'src/utils/dima';


// hooks 
import useResponsive from '../../hooks/useResponsive';

import { SiteTitle } from '../_Reusable/SiteTitle';


// TODO use location instead use route
export function WebcamsCardCom({ wcam }: { wcam: any }) {
  //const initialInputs = { param: "Alle" }
  const { id, title, end, url, url2 } = wcam;
  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();

  return (
    <Card>


      <Box
        component='iframe'
        overflow='hidden'
        //allowFullScreen={true}
        loading='lazy'
        src={url}
        title={title}
        scrolling="no"
        sx={{
          height: '280px',
          //height: '368px',
          width: '100%',

          borderColor: 'dima',
          //border: 'none ', 
          //mt: '-88px'
        }}
        className="iFrame Container"
      />
      <CardActionArea>


        <a target="_blank" href={url2} rel="noopener noreferrer">
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
        </a>
      </CardActionArea>



    </Card >
  )
}
