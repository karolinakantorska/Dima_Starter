// ----------------------------------------------------------------------

const breakpoints = {
  values: {
    xs: 0,
    mobile: 450,
    sm: 600,
    md: 900,
    lm: 1200,
    lg: 1536,
    xl: 1536,
  },
};
 
export default breakpoints;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    lm: true; // adds the `lm` breakpoint
    mobile: true;
  }
}