// ----------------------------------------------------------------------

const breakpoints = {
  values: {
    xs: 0,
    mobile: 450,
    sm: 600,
    md: 900,
    lm: 1200,
    lg: 1500,
    xl: 1800,
  },
};
 
export default breakpoints;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    lm: true; // adds the `lm` breakpoint
    mobile: true;
  }
}