import React from "react";
// @mui
import { Box, } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { news } from 'src/_mock/news/news';
// hooks
import { SiteTitle } from '../_Reusable/SiteTitle';
import { NewsCom } from './NewsCom';

import useResponsive from "src/hooks/useResponsive";

// TODO use location instead use route
export function NewsListCom() {
  //const initialInputs = { param: "Alle" }

  //const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isMiddle = useResponsive('down', 'md');
  let dark = true;
  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.news} />
      <Box
        display="grid"
        gridTemplateColumns={isMiddle ? '1fr' : 'repeat(2, 1fr)'}
        gridTemplateRows='1fr'
        //justifyItems='stretch'
        columnGap="13px"
        rowGap="20px"
        sx={{ mt: 7.5 }}
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
