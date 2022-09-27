import { ReactNode } from 'react';
import { Container, Stack } from '@mui/material';
// guards
//import AuthGuard from '../guards/AuthGuard';
// components
import { HEADER } from 'src/config';
import MainHeader from './MainHeader';
import { styled } from '@mui/material/styles';
import FooterCom from '../components/_Reusable/FooterCom';

// ----------------------------------------------------------------------
/*
    xs: 0,
    mobile: 450,
    sm: 600,
    md: 900,
    lm: 1200,
    lg: 1524,
    xl: 1900,
    */
type Props = {
  children: ReactNode;
};
const ContainerStyle = styled(Container)(({ theme }) => ({
  paddingTop: HEADER.MIDDLE_HEIGHT,
  position: 'absolute',
  backgroundColor: 'transparent',

  [theme.breakpoints.up('xl')]: {
    left: `calc((100vw - 1524px)*0.5)`,
  },

  [theme.breakpoints.up('lm')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    marginTop: '5px',

  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: HEADER.MOBILE_HEIGHT,
  },
}));
export default function MainLayout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: 1, }}>
      <MainHeader />
      <ContainerStyle maxWidth='lg'>
        {children}
      </ContainerStyle>
    </Stack>
  )
}
/*
<ContainerStyle maxWidth='lg'>
        {children}
      </ContainerStyle>
      */