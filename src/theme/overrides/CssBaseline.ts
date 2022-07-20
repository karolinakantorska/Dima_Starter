import { Theme } from '@mui/material/styles';

//import * as RegularBQ from '/font/UniversBQ-Light.woff2';

// ----------------------------------------------------------------------

export default function CssBaseline(theme: Theme) {

  return {
    MuiCssBaseline: {

      styleOverrides: 
      {
        '@font-face':{
          fontFamily: 'Univers BQ',
          src: 'url("/font/UniversBQ-Light.woff2") format("woff2"),url("UniversBQ-Light.woff") format("woff")',
          fontWeight: 600,
          fontStyle: 'normal',
          fontDisplay: 'swap',
        },
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
          fontFamily: 'Univers BQ',
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
        },
        /*
        p:{
fontFamily: 'Univers-BQ-Regular',
        },
        */
        '&.hamburger-react':{
          zIndex:2002,
        }
      },
    },
  };
}
