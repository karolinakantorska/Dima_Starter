import { m } from 'framer-motion';
//import Image from 'next/image';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

// components

// hooks
import useResponsive from '../../hooks/useResponsive';

import Typography from '@mui/material/Typography';

export function VideoCardCom() {

  const isDesktop = useResponsive('up', 'lm');




  return (
    <Card>
      <Box
        component='video'
        controls
        autoPlay
        muted
        title='title'
        sx={{ height: 280, width: '100%', border: 'none ' }}
      >

        <source src="https://dms.licdn.com/playlist/C4E05AQHtoxRfP1NyEA/mp4-640p-30fp-crf28/0/1646142684108?e=1657033200&v=beta&t=JD6uWuv_GPejN6jaBRpms6DU3iwbsKh3Rzs5xirNwI4"
          title='title' type="video/mp4" />

        Your browser does not support the video tag.

      </Box>
      <Box sx={{ height: 70, pl: 2, pt: 1.65 }}>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'dima', }}
        >
          {`SUGGESTION`}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'text.secondary', }}
        >
          {`Im Bau - Realisierung Geplant Auf 2022`}
        </Typography>
      </Box>
    </Card>
  );
}
