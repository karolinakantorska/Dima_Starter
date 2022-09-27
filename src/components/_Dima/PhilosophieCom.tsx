import { m, } from 'framer-motion';
// @mui 
import { Stack, } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import CarouselAnimationCom from '../carousel/CarouselAnimationCom';

export function PhilosophieCom() {
  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');

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
