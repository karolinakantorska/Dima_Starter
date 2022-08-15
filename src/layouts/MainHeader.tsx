// next
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, } from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';

// config
import { HEADER } from 'src/config';
// components

import MenuMobile from './MenuMobile';
import { menuConfigUser, menuConfigAdmin } from './MenuConfig';
import PhoneNrCom from './PhoneNrCom';

import DimaLogoCom from 'src/components/DimaLogoCom';
import useAuth from 'src/utils/firebaseAuth/useAuth';


// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MIDDLE_HEIGHT,
  [theme.breakpoints.up('lm')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
  [theme.breakpoints.down('sm')]: {
    height: HEADER.MOBILE_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {

  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isMiddle = useResponsive('down', 'md');
  const { isAuthenticated } = useAuth();
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isMiddle ? '1fr' : 'repeat(2, 1fr)';
  const gc = isDesktop ? '3/4' : '2/3';


  return (
    <AppBar
      sx={{
        boxShadow: 0,
        bgcolor: isHome ? 'transparent' : 'background.default',
      }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          disableGutters
          maxWidth='lg'
          sx={{
            alignItems: 'center',
            display: "grid",
            gridAutoFlow: 'column',
            gridTemplateColumns: gtc,
            columnGap: "12px",
            rowGap: "20px",
          }}
        >

          <DimaLogoCom
            x={isDesktop ? 263 : isSmall ? 160 : 200}
            y={isDesktop ? 64 : isSmall ? 40 : 50}
          />
          <Box sx={{
            grid: 'item',
            display: "grid",
            gridColumn: gc,
            gridAutoFlow: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>

            {!isMiddle && <PhoneNrCom />}
            <MenuMobile
              navConfig={isAuthenticated ? [...menuConfigAdmin] : [...menuConfigUser]} size={isDesktop ? 40 : isSmall ? 30 : 34}
            />
          </Box>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}