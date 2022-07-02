import { ReactNode } from 'react';
import { Box, Container, Stack } from '@mui/material';
// guards
//import AuthGuard from '../guards/AuthGuard';
// components
import { HEADER } from 'src/config';
import MainHeader from './MainHeader';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;

};
const ContainerStyle = styled(Container)(({ theme }) => ({
  paddingTop: HEADER.MIDDLE_HEIGHT,
  //position: 'absolute',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('lm')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    marginTop: '5px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: HEADER.MOBILE_HEIGHT,
  },
}));
export default function Layout({ children }: Props) {

  return (
    <Container sx={{
      position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0,
      right: 0,
    }}>
      <Stack sx={{ minHeight: 1, }}>
        <MainHeader />
        <ContainerStyle disableGutters={true}  >
          {children}
        </ContainerStyle>
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </Container>
  )
}
