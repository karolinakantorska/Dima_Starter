// next
import NextLink from 'next/link';
// @mui
import { Box, Link, ListItemText } from '@mui/material';
// type
import { NavItemProps } from '../type';
//
import Iconify from '../../Iconify';
import { ListItemStyle as ListItem, ListItemTextStyle, ListItemIconStyle } from './style';
import { isExternalLink } from '..';

// ----------------------------------------------------------------------

export function NavItemRoot({ item, isCollapse, open = false, active, onOpen }: NavItemProps) {
  const { title, path, children, disabled, roles } = item;
  //  second nav
  const renderContent = (
    <ListItemTextStyle
      className="Nav-List-Item"
      //disableTypography
      primary={title}
      primaryTypographyProps={{
        color: 'dima',
        variant: 'h5',
        alignItems: "end"
      }}
    />


  );

  if (children) {
    return (
      <ListItem onClick={onOpen} activeRoot={active} disabled={disabled} roles={roles} className="Nav-Item-Root">
        {renderContent}
      </ListItem>
    );
  }

  return isExternalLink(path) ? (
    <ListItem
      className="Nav-Item-Root"
      component={Link}
      href={path}
      target="_blank"
      rel="noopener"
      disabled={disabled}
      roles={roles}
    >
      {renderContent}
    </ListItem>
  ) : (
    <NextLink href={path} passHref >
      <ListItem
        className="Nav-Item-Root"
        activeRoot={active}
        disabled={disabled}
        roles={roles}
        sx={{ mb: 0, pr: 0 }}
      >
        {renderContent}
      </ListItem>
    </NextLink>
  );
}

// ----------------------------------------------------------------------

type NavItemSubProps = Omit<NavItemProps, 'isCollapse'>;

export function NavItemSub({ item, open = false, active = false, onOpen }: NavItemSubProps) {
  const { title, path, children, disabled, roles } = item;

  const renderContent = (
    <>
      {false && <DotIcon active={active} />}
      <ListItemText
        className="List-Item-Text"
        //disableTypography
        primaryTypographyProps={{
          color: 'red',
          variant: 'h5',
        }}
        primary={title}
      />
    </>
  );

  if (children) {
    return (
      <ListItem onClick={onOpen} activeSub={active} subItem disabled={disabled} roles={roles}>
        {renderContent}
      </ListItem>
    );
  }

  return isExternalLink(path) ? (
    <ListItem
      component={Link}
      href={path}
      target="_blank"
      rel="noopener"
      subItem
      disabled={disabled}
      roles={roles}
    >
      {renderContent}
    </ListItem>
  ) : (
    <NextLink href={path} passHref >
      <ListItem
        activeSub={active}
        subItem
        disabled={disabled}
        roles={roles} >
        {renderContent}
      </ListItem>
    </NextLink>
  );
}

// ----------------------------------------------------------------------

type DotIconProps = {
  active: boolean;
};

export function DotIcon({ active }: DotIconProps) {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  );
}

// ----------------------------------------------------------------------

type ArrowIconProps = {
  open: boolean;
};

export function ArrowIcon({ open }: ArrowIconProps) {
  return (
    <Iconify
      icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
      sx={{ width: 16, height: 16, ml: 1 }}
    />
  );
}
