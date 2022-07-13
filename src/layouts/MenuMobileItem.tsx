import { useState, ReactNode } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// Hamburger

// @mui
import { alpha, styled } from '@mui/material/styles';
import {
    Box,
    Collapse,
    LinkProps,
    ListItemText,
    ListItemButton,
    ListItemButtonProps,

} from '@mui/material';
// config
import { NAVBAR } from 'src/config';
// components

import { NavSectionVertical } from 'src/components/nav-section';

//
import { MenuItemProps } from './type';


// ----------------------------------------------------------------------

type StyleProps = LinkProps & ListItemButtonProps;

interface ListItemStyleProps extends StyleProps {
    component?: ReactNode;
}

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
    //...theme.typography.h5,
    //pt: 8,
    marginTop: 0,
    height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,

}));

// ----------------------------------------------------------------------

type MenuMobileItemProps = {
    item: MenuItemProps;
};

export function MenuMobileItem({ item, }: MenuMobileItemProps) {
    const [open, setOpen] = useState(false);
    const { pathname } = useRouter();
    const { title, path, children } = item;
    const isActive = pathname === path;
    const handleOpen = () => {
        console.log('open');
        setOpen(true);
    };
    const handleClose = () => {
        console.log('close');
        setOpen(false);
    };
    if (children) {
        return (
            <>
                <ListItemStyle>
                    <ListItemText
                        //disableTypography 
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                        onTouchStart={handleOpen}
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
                    onTouchStart={handleOpen}
                    timeout="auto"
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
