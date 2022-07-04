import { Theme } from '@mui/material/styles';
//


// ----------------------------------------------------------------------

export default function Container(theme: Theme) {
  return {
    MuiContainer: {


      styleOverrides: {
        root: {

          '@media (max-width: 1600px)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
          '@media (max-width: 900px)': {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
          },
        },
      },
    }
  }
}
