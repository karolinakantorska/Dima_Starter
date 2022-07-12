import { useState, useEffect, ReactNode } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// Hamburger
import { Squash as Hamburger } from 'hamburger-react'
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Drawer,
  Collapse,
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
import { NavSectionVertical } from 'src/components/nav-section';
import { HEADER } from 'src/config';
//
import { MenuProps, MenuItemProps } from './type';
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { PATH_LOGIN } from 'src/routes/paths';
import Link from 'next/link';

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
        onClick={handleDrawerOpen}
        sx={{
          position: 'relative',
          zIndex: 2202,
          mr: -.5
        }}
      >
        <Hamburger
          easing="ease-in"
          toggled={drawerOpen}
          label={drawerOpen ? "hamburger menu opened" : "hamburger menu closed"}
          size={size}
        />
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

type MenuMobileItemProps = {
  item: MenuItemProps;
};

function MenuMobileItem({ item, }: MenuMobileItemProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  const { title, path, children } = item;
  const isActive = pathname === path;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (children) {
    return (
      <>
        <ListItemStyle


        >
          <ListItemText
            //disableTypography 
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            primaryTypographyProps={{
              color: 'dima',
              variant: 'h5',
            }}
            primary={title.toUpperCase()}
          />
        </ListItemStyle>

        <Collapse
          in={open}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          //timeout="auto"
          unmountOnExit
        >
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse', mt: '0' }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                '& .MuiList-root:last-of-type .MuiListItemButton-root': {
                  height: 40,
                  //paddingLeft: 5,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  //bgcolor: 'background.default',
                  backgroundRepeat: 'no-repeat',
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }
  return (
    <NextLink href={path} passHref>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: 'primary.main',
            fontWeight: 'fontWeightMedium',
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
          }),
        }}
      >
        {/*<ListItemIcon>{icon}</ListItemIcon>*/}
        <ListItemText
          primaryTypographyProps={{
            color: 'dima',
            variant: 'h5',
          }}
          primary={title.toUpperCase()}
        />
      </ListItemStyle>
    </NextLink>
  );
}
