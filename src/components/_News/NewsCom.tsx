//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import React, { useState } from "react";
import { m, } from 'framer-motion';
import { Card, ImageList, ImageListItem, Link, Stack, Typography, Collapse } from "@mui/material";
import parse from 'html-react-parser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { News } from "src/utils/TS/interface";
import { BodyTextCom } from "../_Reusable/BodyTextCom";
import { TitleTextCom } from "../_Reusable/TitleTextCom";

// TODO use location instead use route
export function NewsCom({
  news,
  dark,
}: {
  news: News,
  dark: boolean,

}) {
  const [expand, setExpand] = useState(false);
  function togleExpand() {
    setExpand((expand) => !expand);
  }
  const {
    id,
    photos,
    video,
    date,
    title,
    description,
    link,
  } = news;

  const transition = {
    ease: 'linear',
    duration: 1,
    delay: 0.5,
  }
  const variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: transition,
  };
  const hoverProps = {
    boxShadow: 'inset 0px -1px #EF7B10',
    cursor: 'pointer',
  }
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
        <Typography
          variant="body2"
          component="p"
        >
          MEHR LESEN
          {expand
            ? <ExpandLessIcon fontSize="large" sx={{ pt: 1.5 }} />
            : <ExpandMoreIcon fontSize="large" sx={{ pt: 1.5 }} />
          }
        </Typography>
      </Stack>
      {expand && (
        <Stack
          component={m.div}
          {...variant}
          spacing={2}
          sx={{
            ...propsStack
          }} >
          {description && <Typography
            variant="body2"
            component="p"
          >
            {parse(description)}
          </Typography>}
          {link && (<Link href={link}>
            <BodyTextCom text={`link`} />
          </Link>)}
          {video && (
            <video width="260" height="150" controls muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {(photos.length > 0) && (
            <ImageList sx={{ width: 500, height: 150 }} cols={3} rowHeight={150}>
              {photos.map((photo) => (
                <ImageListItem key={photo}>
                  <img
                    src={`${photo}`}
                    srcSet={`${photo}`}
                    alt={photo}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Stack>
      )}

    </Card >
  )
}
