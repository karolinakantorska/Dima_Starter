import { ReactNode } from 'react';
import { IconifyIcon } from '@iconify/react';
// @mui
import { useTheme, } from '@mui/material/styles';
import { Box, BoxProps, StackProps, Button, } from '@mui/material';
//
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// ----------------------------------------------------------------------


type IProps = BoxProps & StackProps;

interface Props extends IProps {

  children?: ReactNode;
  customIcon?: IconifyIcon | string;
  onNext?: VoidFunction;
  onPrevious?: VoidFunction;
}

export default function CarouselArrows({

  customIcon, // Set icon right
  onNext,
  onPrevious,
  children,
  ...other
}: Props) {
  const theme = useTheme();


  const style = {
    position: 'absolute',
    //mt: 0,
    height: 'calc(100%)',
    width: '15%',
    top: 0,
    zIndex: 9,
  } as const;
  const buttonStyle = {
    height: 'calc(100% - 42px)',
    width: '100%',
    padding: 0,
    color: 'text.disabled',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'text.white',
    },
  }
  const arrowStyle = {
    fontSize: 60,
    fontWeight: 300,

    [theme.breakpoints.down('mobile')]: {
      //fontSize: 20,
      display: 'none'
    },

    [theme.breakpoints.between('mobile', 'lg')]: {
      fontSize: 30,
    },
  }
  //if (children) {
  return (
    <Box {...other} className="arrow box">
      <Box sx={{ ...style, }}>
        <Button
          disableRipple
          aria-label="previous photo"
          size="large"
          onClick={onPrevious}
          sx={{
            justifyContent: 'left',
            ...buttonStyle
          }}
        >
          <ArrowBackIosNewIcon sx={{ ...arrowStyle }} />
        </Button>
      </Box>

      {children}

      <Box sx={{ ...style, right: 8 }}>
        <Button
          disableRipple
          aria-label="next photo"
          size="large"
          onClick={onNext}
          sx={{
            justifyContent: 'right',
            ...buttonStyle
          }}
        >
          <ArrowForwardIosIcon sx={{ ...arrowStyle }} />
        </Button>
      </Box>
    </Box>
  );
  // }
  /*
    return (
      <Stack direction="row" spacing={1} {...other}>
        <Button
          aria-label="previous photo"
          size="large"
          sx={{
            justifyContent: 'left',
            ...buttonStyle
          }}
        >
          <ArrowBackIosNewIcon sx={{ ...arrowStyle }} />
        </Button>
        <p>no photos</p>
        <Button
          aria-label="previous photo"
          size="large"
          sx={{
            justifyContent: 'right',
            ...buttonStyle
          }}
        >
          <ArrowForwardIosIcon sx={{ ...arrowStyle }} />
        </Button>
      </Stack>
    );
    */
}



