import { red } from '@mui/material/colors';
import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function CardActionArea(theme: Theme) {
  return {
    MuiCardActionArea: {

      styleOverrides: {
        root: {
'.MuiTouchRipple-child': {

        },
        },

      },
    },
  };
}
