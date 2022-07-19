
import { m, } from 'framer-motion';

import { Box, Grid, } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';

import { ProjektCardCom } from './ProjektCardCom';

import { ProjectsListType } from '../../utils/TS/interface';
import Link from 'next/link';
import { PATH_PROJEKTE } from '../../routes/paths';
import { useRouter } from 'next/router';



export function ProjectsListCom(
  { projectsList }: {
    projectsList: ProjectsListType,
  }) {
  const projekte: ProjectsListType = [];
  projectsList.map((project) => {
    if (project) {
      projekte.push(project)
    }
  })
  const router = useRouter();
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  const transition = {
    type: 'tween',
    ease: 'linear',
    duration: router.query.id && 1,
    when: "afterChildren"
  };
  const variant = {
    initial: { opacity: 1 },
    exit: router.query.id && { opacity: 0 },
    transition: transition,
  };

  return (
    <Box
      component={m.div}
      {...variant}
      display="grid"
      gridTemplateColumns={gtc}
      columnGap="12px"
      rowGap="20px"
    >
      {projekte.map((project, i) => {
        const divideIn2 = i % 2 == 0 ? true : false;
        const divideIn4 = (i + 1) % 4 == 0 ? true : false;
        const divideIn8 = (i + 1) % 8 == 0 ? true : false;
        return (
          <ProjektCardCom
            key={project.id}
            project={project}
            gridRow={divideIn2 ? '1' : '2'}
            big={divideIn4 ? true : false}
            rewerseBig={divideIn8 ? true : false}
          />
        );
      })}
    </Box>
  );
}

