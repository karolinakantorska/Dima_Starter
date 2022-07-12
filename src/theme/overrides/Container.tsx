import { Theme } from '@mui/material/styles';
//


// ----------------------------------------------------------------------

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1499px)': {
            paddingLeft: 0,
            paddingRight: 0,
          },
          '@media (max-width: 1500px)': {
            paddingLeft: theme.spacing(19),
            paddingRight: theme.spacing(19),
          },
          '@media (max-width: 1200px)': {
            paddingLeft: theme.spacing(9),
            paddingRight: theme.spacing(9),
          },
          '@media (max-width: 900px)': {
            paddingLeft: theme.spacing(7),
            paddingRight: theme.spacing(7),
          },
          '@media (max-width: 600px)': {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
          },
          '@media (max-width: 450px)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
        },
      },
    }
  }
}
