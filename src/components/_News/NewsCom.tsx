//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import React, { useState } from "react";
import { m, } from 'framer-motion';
import { Card, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { News } from "src/utils/TS/interface";
import { BodyTextCom } from "../_Reusable/BodyTextCom";


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
    date,
    title,
    description,
    link,
  } = news;
  const [expand, setExpand] = useState(false);

  const isContent = (description.length > 0) || (link.length > 0);

  function togleExpand() {
    setExpand((expand) => !expand);

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
  const propsEmptyCard = {
    backgroundColor: dark ? 'background.between' : 'background.paper',
  }
  const propsCard = {
    ...propsEmptyCard,
    height: expand ? '444px' : '212px',
    gridRow: expand ? 'span 2' : 'span 1',
    transition: 'height 1s',
    '&:hover': {
      boxShadow: 'inset 0px -5px #EF7B10',
      cursor: 'pointer',
      'p.title': {
        color: 'dima'
      }
    },
    '&:focus': {
      boxShadow: 'inset 0px -5px #EF7B10',
      cursor: 'pointer',
      'p.title': {
        color: 'dima'
      }
    },
  };

  const propsStack = {
    pt: 3.8,
    px: 4,
    pb: 3.8,
  };

  const DescCom = () => (
    <>
      {description.map((desc, i) => <Typography
        key={i}
        sx={{ color: 'dima' }}
        variant="body2"
        component="p"
      >
        {desc}
      </Typography>)}
    </>
  )

  const LinkCom = () => (
    <Stack spacing={1} sx={{ pt: 3.4 }}>
      <BodyTextCom text="Links:" />
      {link.map((l, i) => (
        <a key={i} target="_blank" rel="noreferrer" href={l.url}>{l.text}</a>
      )
      )}
    </Stack>
  )
  const CardInhalt = () => (
    <div>
      <BodyTextCom text={`${new Date(date).toLocaleString('de-DE', { dateStyle: "long" })}`} />
      <Typography
        sx={{ pt: 3.8 }}
        variant="body2"
        component="p"
        className="title"
      >
        {`${title.toUpperCase()}`}
      </Typography>
    </div>

  )
  if (isContent) {
    return (
      <Card
        onClick={togleExpand}
        sx={{ ...propsCard }}>

        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ ...propsStack, height: '212px' }}
        >
          <CardInhalt />
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

            <Stack sx={{
              position: 'relative',
              top: '-80px',
            }}>
              {(description.length > 0) && <DescCom />}
              {(link.length > 0) && <LinkCom />}
            </Stack>

          </Stack>
        )}
      </Card >
    )
  } else {
    return (
      <Card
        sx={{ ...propsEmptyCard }}>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ ...propsStack, height: '212px' }}
        >
          <CardInhalt />
        </Stack>
      </Card >


    )
  }
}
/*
 <Button key={i} variant="text" onClick={(e) => handleClick(e, l.href)}>
            {l.text}
          </Button>
          https://www.google.com
          */