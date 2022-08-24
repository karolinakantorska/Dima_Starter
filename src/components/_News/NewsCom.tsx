//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import React, { useState } from "react";
import { m, } from 'framer-motion';
import { Card, Grid, Link, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { News } from "src/utils/TS/interface";
import { BodyTextCom } from "../_Reusable/BodyTextCom";
import { TitleTextCom } from "../_Reusable/TitleTextCom";
import parse from 'html-react-parser';

// TODO use location instead use route
export function NewsCom({
  news,
  dark,
}: {
  news: News,
  dark: boolean,

}) {
  const {
    //id,
    photos,
    video,
    date,
    title,
    description,
    link,
  } = news;
  const [expand, setExpand] = useState(false);
  const isContent = Boolean(video) || (description.length > 0) || (photos.length > 0) || (link.length > 0);
  function togleExpand() {
    if (isContent) {
      setExpand((expand) => !expand);
    }
  };
  const transition = {
    ease: 'linear',
    duration: 1,
    delay: 0.5,
  };
  const variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: transition,
  };
  const hoverProps = {
    boxShadow: 'inset 0px -1px #EF7B10',
    cursor: 'pointer',
  };
  const propsCard = {
    backgroundColor: dark ? 'background.between' : 'background.paper',
    height: expand ? '444px' : '212px',
    gridRow: expand ? 'span 2' : 'span 1',
    transition: 'height 1s',
    '&:hover': {
      ...hoverProps
    },
    '&:focus': {
      ...hoverProps
    },
  };

  const propsStack = {
    pt: 3.8,
    px: 4,
    pb: 3.8,
  };
  const VideoCom = () => (
    <>{parse(video)}
    </>


  )
  const ImageCom = () => (
    <img
      src={`${photos[0].url}`}
      alt={title}
      height="260"
      width='auto'
      loading="lazy"
    />
  )
  const DescCom = () => (
    <>
      {description.map((desc, i) => <BodyTextCom key={i} text={desc} />)}
    </>
  )
  const LinkCom = () => (
    <Stack spacing={2}>
      <BodyTextCom text="Links:" />
      {link.map((link, i) => (
        <Link key={i} href={link.href} >
          {link.desc}
        </Link>
      ))}
    </Stack>
  )
  return (
    <Card
      onClick={togleExpand}
      sx={{ ...propsCard }}>
      <Stack
        direction="column"
        //spacing={3.8}
        justifyContent="space-between"
        sx={{ ...propsStack, height: '212px' }}
      >
        <div>
          <BodyTextCom text={`${date.toLocaleString('de-DE', { dateStyle: "long" })}`} />
          <TitleTextCom text={`${title.toUpperCase()}`} sx={{ pt: 3.8 }} />
        </div>
        {isContent && !expand && <Typography
          variant="body2"
          component="p"
        >
          MEHR LESEN
          {expand
            ? <ExpandLessIcon fontSize="large" sx={{ pt: 1.5 }} />
            : <ExpandMoreIcon fontSize="large" sx={{ pt: 1.5 }} />
          }
        </Typography>}
      </Stack>
      {expand && (
        <Stack
          component={m.div}
          {...variant}
          spacing={2}
          sx={{
            ...propsStack
          }} >
          <Grid
            container
            sx={{
              position: 'relative',
              top: '-80px',
            }}>
            {video
              ? <VideoCom />
              : (photos.length > 0)
                ? <ImageCom />
                : (description.length > 0)
                  ? <DescCom />
                  : <LinkCom />
            }
          </Grid>
        </Stack>
      )}
    </Card >
  )
}
/*
<iframe width="462" height="260" src={video} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
*/