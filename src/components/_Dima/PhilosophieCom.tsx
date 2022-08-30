import { m, } from 'framer-motion';
// @mui 
import { Stack, } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';


import { useRouter } from 'next/router';
import CarouselAnimationCom from '../carousel/CarouselAnimationCom';


export function PhilosophieCom() {
  const isDesktop = useResponsive('up', 'lg');
  const isSmallDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isMobile = useResponsive('down', 'mobile');

  const router = useRouter();



  const transition = {
    type: 'tween',
    ease: 'linear',
    duration: 1,
  }
  const variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: transition,
  };
  const propsContent = {
    mt: isSmall ? 6 : 0,
  };
  const propsBox = {
    height: '900px',
    width: '1600px',
    border: 'solid black'
  }
  const propsBoxHoriz = {
    backgroundColor: 'dima',
    position: 'absolute',
    height: '900px',
    width: '4px',
    left: '25%'
  }
  const propsBoxVert = {
    backgroundColor: 'dima',
    position: 'absolute',
    height: '10px',
    width: '120px',

  }

  return (
    <>
      <Stack
        component={m.div}
        {...variant}
        spacing={isDesktop ? 18.5 : 10}
        sx={{ ...propsContent }}
      >
        <CarouselAnimationCom />
      </Stack>

    </>
  )


}
