import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';
//import * as RegularBQ from '/font/UniversBQ-Light.woff2';
// ----------------------------------------------------------------------
const FONT_PRIMARY = 'Univers BQ, Univers , Open Sans, Arial, sans-serif'; // Google Font

// const FONT_SECONDARY = ' BG_Regular, Univers,Open Sans, Arial,sans-serif'; // Local Font
        

const typography = {
 fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,

  h1: {
    fontWeight: 600,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 52 / 44,
    fontSize: pxToRem(34),
    ...responsiveFontSizes({ sm: 38, md: 40, lg: 44 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 36 / 30,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 28, lg: 30 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 36 / 30,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 28, lg: 30 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 32 / 27,
    fontSize: pxToRem(21),
    ...responsiveFontSizes({ sm: 23, md: 25, lg: 27 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 30 / 25,
    fontSize: pxToRem(19),
    ...responsiveFontSizes({ sm: 21, md: 23, lg: 25 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 600,  
    lineHeight: 25 / 20,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  body2: {
    fontWeight: 600,
    lineHeight: 23 / 20,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  caption: {
    lineHeight: 28 / 24,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 20, md: 22, lg: 24 }),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 600,
    lineHeight: 28 / 24,
    fontSize: pxToRem(22),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ sm: 24, md: 26, lg: 28 }),

  },
} as const;

export default typography;
