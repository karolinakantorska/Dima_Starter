import React from "react";
// @mui
import { Box, } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { news } from 'src/_mock/news/news';

// hooks
import { SiteTitle } from '../_Reusable/SiteTitle';
import { NewsCom } from './NewsCom';



// TODO use location instead use route
export function NewsListCom() {
  //const initialInputs = { param: "Alle" }
  //const [dark, setDark] = useState(false);
  //const isDesktop = useResponsive('up', 'lm');
  //const isSmall = useResponsive('down', 'sm');
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
/*

*/