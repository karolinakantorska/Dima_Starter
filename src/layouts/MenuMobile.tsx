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
  ListItemIcon,
  ListItemButton,
  ListItemButtonProps,
  Stack
} from '@mui/material';
// config
import { NAVBAR } from 'src/config';
// components
import Iconify from 'src/components/Iconify';
import Scrollbar from 'src/components/Scrollbar';
import { NavSectionVertical } from 'src/components/nav-section';
import { HEADER } from 'src/config';
//
import { MenuProps, MenuItemProps } from './type';
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { PATH_LOGIN } from 'src/routes/paths';

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
    //marginTop: '5px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: HEADER.MOBILE_HEIGHT,
  },
}));

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.h5,
  marginTop: 0,
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'uppercase',
  color: theme.palette.text.secondary,

}));

// ----------------------------------------------------------------------

export default function MenuMobile({ navConfig }: MenuProps) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { logout, isAuthenticated } = useAuth();
  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen((openDrawer) => !openDrawer);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleDrawerOpen} sx={{
          position: 'relative',
          zIndex: 2202,
        }}
      >
        <Hamburger
          easing="ease-in"
          size={40}
          toggled={drawerOpen}
          label={drawerOpen ? "hamburger menu opened" : "hamburger menu closed"}
        />
      </Box>

      <Drawer
        variant="persistent"
        open={drawerOpen}
        anchor='right'
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <BoxStyle>
            <List
              //disablePadding
              className='List'
              sx={{
                //float: 'right',
                //justifyContent: 'end'
              }}
            >
              {navConfig.map((link) => (
                <MenuMobileItem key={link.title} item={link} isOpen={open} onOpen={handleOpen} />
              ))}
            </List>
            {!isAuthenticated &&
              <MenuMobileItem
                item={{ title: 'Anmelden', path: PATH_LOGIN.login }}
                isOpen={open}
                onOpen={handleOpen}
              />
            }
            {isAuthenticated &&
              <ListItemStyle onClick={() => logout()} >
                <ListItemText
                  primaryTypographyProps={{
                    color: 'dima',
                    variant: 'h5',
                  }}
                  primary={'Ausnmelden'.toUpperCase()}
                />
              </ListItemStyle>}
          </BoxStyle>

        </Scrollbar>
      </Drawer>
    </>
  );
}


// ----------------------------------------------------------------------

type MenuMobileItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  onOpen: VoidFunction;
};

function MenuMobileItem({ item, isOpen, onOpen }: MenuMobileItemProps) {
  const { pathname } = useRouter();
  const { title, path, children } = item;
  const isActive = pathname === path;
  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen} >
          {/*<ListItemIcon>{icon}</ListItemIcon>*/}
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
          <ListItemText
            //disableTypography 

            primaryTypographyProps={{
              color: 'dima',
              variant: 'h5',

            }}
            primary={title.toUpperCase()}
          />

        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse', mt: '0' }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                '& .MuiList-root:last-of-type .MuiListItemButton-root': {
                  height: 40,
                  paddingLeft: 5,
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
