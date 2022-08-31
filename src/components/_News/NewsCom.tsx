//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import React, { Dispatch, SetStateAction, useState } from "react";
import { m, } from 'framer-motion';
import { Card, CardActions, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { News } from "src/utils/TS/interface";
import { BodyTextCom } from "../_Reusable/BodyTextCom";
import { EditDeleteIconCom } from "../_Reusable/EditDeleteIconCom";
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { deleteProjectFromFirestore } from "src/utils/apis/deleteFromFirestore";
import { PATH_NEWS } from '../../routes/paths';
import { revalidateURL } from "src/utils/myUtils/revalidateURL";
import { DeleteDialogCom } from "../_Reusable/DeleteDialogCom";

type Props = {
  news: News,
  dark: boolean,
  setSucces: Dispatch<SetStateAction<string | boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<{
    code: string;
    message: string;
  } | null>>;
}
// TODO use location instead use route
export function NewsCom({
  news,
  dark,
  setSucces,
  setLoading,
  setError,
}: Props) {
  const {
    id,
    date,
    title,
    description,
    link,
  } = news;
  const { isAuthenticated } = useAuth();
  const [expand, setExpand] = useState(false);
  const [open, setOpen] = useState(false);

  const isContent = (description.length > 0) || ((link.url !== ''));

  function togleExpand() {
    setExpand((expand) => !expand);
  };
  function handleOpen() {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  };
  function handleDelete() {
    setLoading(true);
    deleteProjectFromFirestore('news', id)
      .then(() => {
        fetch(revalidateURL(PATH_NEWS.news)).then(() => {
          setLoading(false);
          setSucces(true);
        })
      })
      .catch((error) => {
        //console.log('error', error);
        setError(error);
        setLoading(false);
      });

    setOpen(false);
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
      <a target="_blank" rel="noreferrer" href={link.url}>{link.text}</a>
    </Stack>
  )
  const CardInhalt = () => (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <BodyTextCom text={`${new Date(date).toLocaleString('de-DE', { dateStyle: "long" })}`} />
        {isAuthenticated &&
          <CardActions sx={{ p: 0 }}>
            <EditDeleteIconCom handleOpen={handleOpen} editURL={`${PATH_NEWS.editNews}/${id}`} />
          </CardActions>}
      </Stack>


      <Typography
        sx={{ pt: 3.8 }}
        variant="body2"
        component="p"
        className="title"
      >
        {`${title.toUpperCase()}`}
      </Typography>

      {isAuthenticated && <DeleteDialogCom
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
        objectToBeDeled="News"
        titleOfObjectToBeDeled={`${title.toUpperCase()}}`}
      />
      }
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

            <Stack
              spacing={2}
              sx={{
                position: 'relative',
                top: '-120px',
              }}>
              {link.url && <LinkCom />}
              {(description.length > 0) && <DescCom />}
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
