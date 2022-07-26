
import { m, } from 'framer-motion';
import { Box, } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { ProjektCardCom } from './ProjektCardCom';
import { ProjectsListType, ProjectType } from '../../utils/TS/interface';
import { useRouter } from 'next/router';
import { useState } from 'react';



export function ProjectsListCom(
  { projectsList }: {
    projectsList: ProjectsListType,
  }) {
  type ProjectDisplay = {
    project: ProjectType,
    mirrored: boolean,
    bigReversed: boolean
  };

  const projectsTODisplay: ProjectDisplay[] = [];
  let mirrored = true;
  let reversed = true;
  projectsList.map((project, i) => {
    if (project) {
      if (!project.big) {
        mirrored = !mirrored;
      }
      if (project.big) {
        reversed = !reversed;
      }
      const projectDisplay = { project: project, mirrored: mirrored, bigReversed: reversed }
      projectsTODisplay.push(projectDisplay)
    }
  })
  console.log('projectsTODisplay', projectsTODisplay)

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
      gridAutoFlow='dense'
      columnGap="12px"
      rowGap="20px"
    >
      {projectsTODisplay.map((project, i) => {
        //const divideIn2 = i % 2 == 0 ? true : false;
        //const divideIn4 = (i + 1) % 4 == 0 ? true : false;
        //const divideIn8 = (i + 1) % 8 == 0 ? true : false;
        return (
          <ProjektCardCom
            key={project.project.id}
            project={project.project}
            //gridRow={divideIn2 ? '1' : '2'}
            gridRow={project.mirrored ? '1' : '2'}
            big={project.project.big}
            //rewerseBig={divideIn8 ? true : false}
            rewerseBig={project.bigReversed}
          />
        );
      })}
    </Box>
  );
}

/*
    
    */