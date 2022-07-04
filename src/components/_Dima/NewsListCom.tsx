import React, { useState } from "react";
// @mui
import { Box, Grid, Button, Stack, Typography } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { news } from 'src/_mock/news/news';

// hooks
import useResponsive from '../../hooks/useResponsive';
import { SiteTitle } from '../_Reusable/SiteTitle';
import { NewsCom } from './NewsCom';



// TODO use location instead use route
export function NewsListCom() {
  //const initialInputs = { param: "Alle" }
  //const [dark, setDark] = useState(false);
  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  let dark = true;
  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.news} />
      <Box
        display="grid"
        gridTemplateColumns='repeat(2, 1fr)'
        gridTemplateRows='1fr'
        //justifyItems='stretch'
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 6 }}
      >
        {news.map((news, i) => {
          if ((i + 1) % 2 == 0) {
            dark = !dark;
          }
          return (<NewsCom key={news.id} news={news} dark={dark} />)


        })}
      </Box>
    </>
  )
}
/*

*/