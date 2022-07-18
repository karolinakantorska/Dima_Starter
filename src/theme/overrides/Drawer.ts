import { alpha, Theme } from '@mui/material';

// ----------------------------------------------------------------------

export default function Drawer(theme: Theme) {
  //const isLight = theme.palette.mode === 'light';

  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.palette.grey[500_80],
          border:"none",
          pb: 5,
          minWidth: 400,
          '@media (min-width: 1917px)': {
            minWidth: `calc((100vw - 1024px)*.5)`,
          },
        },
        /*
        modal: {
          '&[role="presentation"]': {
            
            '& .MuiDrawer-paperAnchorLeft': {
              boxShadow: `8px 24px 24px 12px ${alpha(
                theme.palette.grey[900],
                isLight ? 0.16 : 0.48
              )}`
            },
            
            '& .MuiDrawer-paperAnchorRight': {
              boxShadow: `-8px 24px 24px 12px ${alpha(
                theme.palette.grey[900],
                isLight ? 0.16 : 0.48
              )}`
            }
          }
        }
        */
      }
    }
  };
}
