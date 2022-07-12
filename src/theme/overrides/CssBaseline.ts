import { Theme } from '@mui/material/styles';
//import { BG_Regular } from '../typography';

// ----------------------------------------------------------------------

export default function CssBaseline(theme: Theme) {
 
  return {
    MuiCssBaseline: {
      /*
 '@global': {
        '@font-face': [ BG_Regular],
      },
      */
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#__next': {
          width: '100%',
          height: '100%',
        },

        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        a:{
          color: theme.palette.text.disabled
        }
      },
    },
  };
}
