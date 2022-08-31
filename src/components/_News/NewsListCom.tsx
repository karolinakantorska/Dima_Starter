import React, { useEffect, useState } from "react";
// @mui
import { Box, } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
// hooks
import { SiteTitle } from '../_Reusable/SiteTitle';
import { NewsCom } from './NewsCom';

import useResponsive from "src/hooks/useResponsive";
import { News } from "src/utils/TS/interface";
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { AlertCom } from "../_Reusable/AlertCom";
import router from "next/router";

type Props = {
  news: News[]
}
export function NewsListCom({ news }: Props) {
  const [error, setError] = useState<null | { code: string, message: string }>(null)
  const [succes, setSucces] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const changed = localStorage.getItem('news');
    if (changed === 'news') {
      localStorage.removeItem('news');
      router.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (succes) {
      setTimeout(() => {
        setSucces(false);
        router.reload();
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [succes]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 9000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  //const initialInputs = { param: "Alle" }
  //const isDesktop = useResponsive('up', 'lm');
  //const isSmall = useResponsive('down', 'sm');
  const isMiddle = useResponsive('down', 'md');
  let dark = true;
  //const { query } = useRouter();

  return (
    <>
      <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
      <SiteTitle text={layoutHeader.news} />
      {news && <Box
        display="grid"
        gridTemplateColumns={isMiddle ? '1fr' : 'repeat(2, 1fr)'}
        gridTemplateRows='1fr'
        columnGap="13px"
        rowGap="20px"
        sx={{ mt: 7.5 }}
      >
        {news.map((news, i) => {
          if ((i + 1) % 2 == 0) {
            dark = !dark;
          }
          return (
            <NewsCom
              key={news.id}
              news={news}
              dark={dark}
              setSucces={setSucces}
              setLoading={setLoading}
              setError={setError}
            />
          )
        })}
      </Box>}
      {!news && <TitleTextCom text="Leider haben wir momentan, keine News zu teilen" />}
    </>
  )

}


