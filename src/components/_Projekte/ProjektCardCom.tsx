import { m } from 'framer-motion';
//import Image from 'next/image';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
// components
import { varHover, varTranHover } from '../animate';
import Image from '../Image';
// hooks
import useResponsive from '../../hooks/useResponsive';
import Link from 'next/link';
import { ProjectType } from 'src/utils/TS/interface';

import { CardActionArea } from '@mui/material';
import { PATH_PROJEKTE } from 'src/routes/paths';
import Typography from '@mui/material/Typography';
import { TextCardCom } from './textCardCom';

export function ProjektCardCom({
  project,
  gridRow,
  big,
  rewerseBig,
}: {
  project: ProjectType;
  gridRow: '1' | '2';
  big: boolean;
  rewerseBig: boolean;
}) {
  //console.log('project', project)
  const { id, photo, photoAuthor } = project;
  //console.log('photoAuthor', photoAuthor)
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isBig = isDesktop ? big : false;
  const isBigAndDisplaysDesktop = isDesktop && big;

  const propsPhotoAuthor = {
    position: 'absolute',
    bottom: 0
  }
  const boxProps = {
    minWidth: '20px',
    display: 'grid',
    overflow: 'hidden',
    gridAutoRows: '1fr',
    gridAutoFlow: isBigAndDisplaysDesktop ? 'column' : 'row',
    gridColumn: isBigAndDisplaysDesktop ? 'span 3' : 'span 1',
    gridTemplateColumns: isBigAndDisplaysDesktop ? '1fr 12px 1fr 12px 1fr' : '1fr',
    columnGap: '0px',

  }
  const cardProps = {
    gridRow: isBigAndDisplaysDesktop ? 'span 2' : gridRow,
    gridColumn: isBigAndDisplaysDesktop ? rewerseBig ? '3/span 3' : '1/span 3' : 'span 1',

  }
  /*
      '&:hover': {
        backgroundColor: 'red'
      }
      */
  return (
    <Box
      sx={{ ...boxProps }}
      component={m.div}
      whileHover="hover"
    >
      <Link href={`${PATH_PROJEKTE.projekt}/${id}`} >
        <Card
          component={m.div}
          variants={varHover(1.05)}
          transition={varTranHover()}
          sx={{ ...cardProps }}
        >
          <CardActionArea
            disableRipple
            aria-label={project.title}
          >
            <Box className="hallo" sx={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              background: 'transparent',
              zIndex: 2000,
              transition: '1s',
              '&:active': {
                background: 'linear-gradient(50deg, rgba(255,255,255,0.8) 1%, rgba(255,255,255,0.1) 40%)',
                transform: 'scale(6) translate(35%, 0);  ',
              }
            }} />
            <Image src={photo.url} alt={photo.alt} ratio="16/9" />
            {photoAuthor &&
              <Typography
                variant="body2"
                display="span"
                sx={{ ...propsPhotoAuthor }}
              >
                {photoAuthor}
              </Typography>}

          </CardActionArea>
        </Card>
      </Link>
      <TextCardCom project={project} big={isBig} rewerseBig={rewerseBig} />
    </Box >
  );
}
/*
<Image src={avatar} alt={name} ratio="16/9" />
*/