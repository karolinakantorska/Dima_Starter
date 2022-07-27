//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import React, { useState } from "react";
import { m, } from 'framer-motion';
import { Card, ImageList, ImageListItem, Link, Stack, Typography, Collapse } from "@mui/material";
import parse from 'html-react-parser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { News } from "src/utils/TS/interface";

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
  const backgroundColor = dark ? 'background.between' : 'background.paper';
  const pt = 3.8;
  const py = 4;
  const pb = 3.8;
  const gridRow = expand ? 'span 2' : 'span 1';
  const height1 = expand ? '444px' : '212px';

  const hoverProps = {
    boxShadow: 'inset 0px -1px #EF7B10',
    cursor: 'pointer',
  }

  return (
    <Card
      onClick={togleExpand}
      sx={{
        backgroundColor: backgroundColor,
        height: height1,
        gridRow: gridRow,
        transition: 'height 1s',
        '&:hover': {
          ...hoverProps
        },
        '&:focus': {
          ...hoverProps
        },
      }}>
      <Stack
        direction="column"
        spacing={3.8}
        justifyContent="space-between"
        sx={{
          height: '212px',
          pt: pt,
          px: py,
          pb: pb,
        }}
      >
        <div>
          <Typography
            variant="body2"
            component="div"
          >
            {`${date.toLocaleString('de-DE', { dateStyle: "long" })}`}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: 'dima', pt: 3.8 }}
          >
            {`${title.toUpperCase()}`}
          </Typography>
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
            pt: pt,
            px: py,
            pb: pb,
          }} >
          {description && <Typography
            variant="body2"
            component="p"
          >
            {parse(description)}
          </Typography>}
          {link && (<Link href={link}>
            <Typography
              variant="body2"
              component="p"
            >
              link
            </Typography>
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
