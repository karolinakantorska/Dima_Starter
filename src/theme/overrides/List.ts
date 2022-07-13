import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function List(theme: Theme) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemButton:{
styleOverrides: {
        root: {
          paddingTop: theme.spacing(0.62),
          paddingBottom: theme.spacing(0.62),
          margin:0,
          paddingRight: 0,
          float: 'right',
          alignItems:'end',
          '&:first-of-type':{
//backgroundColor:'red'
          },
          '&:last-of-type':{
//backgroundColor:'green'
          }
    },
    /*
    selected:{
      //backgroundColor: 'red'
    }*/
  }
  
},
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
          'span':{
          float: 'right'
        },
'@media (min-width: 1917px)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
          '@media (max-width: 1916px)': {
            paddingLeft: theme.spacing(26),
            paddingRight: theme.spacing(26),
            maxWidth: 'none',
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
        multiline: {
          marginTop: 0,
          marginBottom: 0,
          color:theme.palette.dima,
          float: 'right',
paddingTop: theme.spacing(0.25),
          paddingBottom: theme.spacing(0.25),
        },
        
      },
    },
  };
}
