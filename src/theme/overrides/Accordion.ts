import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
           position :'static',
          '&.Mui-expanded': {
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(0),
          paddingRight: theme.spacing(0),
          marginTop: 0,
          marginBottom: 0,
          minHeight:0,
          '&.Mui-disabled': {
            opacity: 1,
            color: theme.palette.action.disabled,
            '&.MuiTypography-root': {
              color: 'inherit'
            }
          },
          '.MuiAccordionSummary-content':{
marginTop: 0,
marginBottom: 0,
          }
        },
        expandIconWrapper: {
          color: 'inherit'
        }
      }
    }
  };
}
