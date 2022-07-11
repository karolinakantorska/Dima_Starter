// @mui
import { styled } from '@mui/material/styles';
import { List, Box, } from '@mui/material';
// type
import { NavSectionProps } from '../type';
//
import { NavListRoot } from './NavList';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function NavSectionVertical({
  navConfig,
  isCollapse = false,
  ...other
}: NavSectionProps) {
  return (
    <Box {...other} className="Nav-Section-Box" sx={{ pb: 5, mt: -1.25 }}>
      {navConfig.map((group) => (
        <List key={group.subheader} disablePadding className="Nav-Section-List">
          {group.items.map((list) => (
            <NavListRoot key={list.title + list.path} list={list} isCollapse={isCollapse} />
          ))}
        </List>
      ))}
    </Box>
  );
}
