import { ReactNode } from 'react';
import { Container, Stack } from '@mui/material';
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
export default function MainLayoutWithoutFooter({ children }: Props) {
  return (
    <Stack sx={{ minHeight: 1, }}>
      <MainHeader />
      <ContainerStyle maxWidth='lg'>
        {children}
      </ContainerStyle>
    </Stack>
  )
}
