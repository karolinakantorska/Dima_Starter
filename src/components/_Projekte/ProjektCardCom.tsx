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
import { TextCardCom } from './textCardCom';
import { Dispatch, SetStateAction } from 'react';


export function ProjektCardCom({
  project,
  gridRow,
  big,
  rewerseBig,
  setSucces,
  setLoading,
  setError,
}: {
  project: ProjectType;
  gridRow: '1' | '2';
  big: boolean;
  rewerseBig: boolean;
  setSucces: Dispatch<SetStateAction<string | boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<{
    code: string;
    message: string;
  } | null>>;
}) {
  //console.log('project', project)
  const { id, photo, title } = project;

  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isBig = isDesktop ? big : false;
  const isBigAndDisplaysDesktop = isDesktop && big;

  const boxProps = {
    minWidth: '20px',
    display: 'grid',
    overflow: 'hidden',
    gridAutoRows: isSmall ? 'auto 1fr' : '1fr 1fr',
    gridAutoFlow: isBigAndDisplaysDesktop ? 'column' : 'row',
    gridColumn: isBigAndDisplaysDesktop ? 'span 3' : 'span 1',
    gridTemplateColumns: isBigAndDisplaysDesktop ? '1fr 12px 1fr 12px 1fr' : '1fr',
    columnGap: '0px',
  }
  const cardProps = {
    gridRow: isBigAndDisplaysDesktop ? 'span 2' : gridRow,
    gridColumn: isBigAndDisplaysDesktop ? rewerseBig ? '3/span 3' : '1/span 3' : 'span 1',
  }

  return (
    <Box
      sx={{ ...boxProps }}
      component={m.div}
      whileHover="hover"
    >
      <Link href={`${PATH_PROJEKTE.projekt}/${title}/${id}`} passHref >
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
            <Box
              component={m.div}
              key="animated children"
              sx={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                background: 'transparent',
                zIndex: 2000,
                transition: '.15s',
                boxShadow: 'inset 0px 0px rgba(255,255,255,0.5)',

              }}
              whileTap={{
                boxShadow: 'inset 0px -600px rgba(255,255,255,0.5)',
              }}
            />
            <Image
              src={photo.url}
              alt={photo.alt}
              ratio="16/9"
            />
          </CardActionArea>
        </Card>
      </Link>

      <TextCardCom project={project} big={isBig} rewerseBig={rewerseBig} setSucces={setSucces}
        setLoading={setLoading}
        setError={setError} />
    </Box >
  );
}
/*
<Image src={avatar} alt={name} ratio="16/9" />
*/