import { m, } from 'framer-motion';
import { Box, } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { ProjektCardCom } from './ProjektCardCom';
import { ProjectsListType, ProjectType } from '../../utils/TS/interface';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { AlertCom } from '../_Reusable/AlertCom';
import { ReloadContext } from 'src/contexts/RevalidateContext';
//import { deleteImage } from 'src/utils/apis/deletePhotoFromStorage';

export function ProjectsListCom(
  { projectsList }: {
    projectsList: ProjectsListType,
  }) {
  type ProjectDisplay = {
    project: ProjectType,
    mirrored: boolean,
    bigReversed: boolean
  };
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const changed = localStorage.getItem('projects');
    if (changed === 'projects') {
      localStorage.removeItem('projects');
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
  });

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
    <>
      <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
      <Box
        component={m.div}
        {...variant}
        display="grid"
        gridTemplateColumns={gtc}
        gridAutoFlow='dense'
        columnGap="15px"
        rowGap="15px"
      >
        {projectsTODisplay && projectsTODisplay.map((project, i) => {
          return (
            <ProjektCardCom
              key={project.project.id}
              project={project.project}
              gridRow={project.mirrored ? '1' : '2'}
              big={project.project.big}
              rewerseBig={project.bigReversed}
              setSucces={setSucces}
              setLoading={setLoading}
              setError={setError}
            />
          );
        })}
        {!projectsTODisplay && <p>Es gibt momentan keine Projekte</p>}
      </Box>
    </>
  );
}
