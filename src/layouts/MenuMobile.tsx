import { useState, useEffect, ReactNode } from 'react';
// next

import { useRouter } from 'next/router';
// Hamburger
import { Squash as Hamburger } from 'hamburger-react'
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  Drawer,

  LinkProps,
  ListItemText,
  ListItemButton,
  ListItemButtonProps,
  Stack,
} from '@mui/material';
// config
import { NAVBAR } from 'src/config';
// components
import Scrollbar from 'src/components/Scrollbar';

import { HEADER } from 'src/config';
//
import { MenuProps, } from './type';
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { PATH_LOGIN } from 'src/routes/paths';
import Link from 'next/link';
import { MenuMobileItem } from './MenuMobileItem';

// ----------------------------------------------------------------------

type StyleProps = LinkProps & ListItemButtonProps;

interface ListItemStyleProps extends StyleProps {
  component?: ReactNode;
}

const BoxStyle = styled(Box)(({ theme }) => ({
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

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
  //...theme.typography.h5,
  //pt: 8,
  marginTop: 0,
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'uppercase',
  color: theme.palette.text.secondary,

}));

// ----------------------------------------------------------------------

export default function MenuMobile({ navConfig, size }: MenuProps) {
  const { pathname } = useRouter();

  //const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const { logout, isAuthenticated } = useAuth();

  // TODO not closing in PC view
  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setDrawerOpen((openDrawer) => !openDrawer);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          mr: -.5
        }}
      >
        <Box onClick={handleDrawerOpen} >
          <Hamburger
            //id='HmburgerMenu'
            easing="ease-in"
            toggled={drawerOpen}
            label={drawerOpen ? "hamburger menu opened" : "hamburger menu closed"}
            size={size}
          />
        </Box>

        <Drawer
          elevation={0}
          variant="persistent"
          open={drawerOpen}
          anchor='right'
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: false }}
          PaperProps={{
            sx: {
              pb: 5,
              minWidth: 300
            }
          }}
        >
          <Scrollbar>
            <BoxStyle>
              <List>
                <Stack direction='column'>
                  {navConfig.map((link) => (
                    <MenuMobileItem
                      key={link.title}
                      item={link}
                    />
                  ))}
                </Stack>
              </List>
              {!isAuthenticated &&
                <Link href={PATH_LOGIN.login} passHref>
                  <ListItemStyle onClick={() => logout()} >
                    <ListItemText
                      primaryTypographyProps={{
                        color: 'text.disabled',
                        variant: 'h5',
                      }}
                      primary={'Anmelden'.toUpperCase()}
                    />
                  </ListItemStyle>
                </Link>
              }
              {isAuthenticated &&
                <ListItemStyle onClick={() => logout()} >
                  <ListItemText
                    primaryTypographyProps={{
                      color: 'text.disabled',
                      variant: 'h5',
                    }}
                    primary={'Ausnmelden'.toUpperCase()}
                  />
                </ListItemStyle>}
            </BoxStyle>
          </Scrollbar>
        </Drawer>
      </Box>


    </>
  );
}

// ----------------------------------------------------------------------

