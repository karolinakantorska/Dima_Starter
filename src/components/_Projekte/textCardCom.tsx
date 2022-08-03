import Link from 'next/link';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
// @mui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { ImageType, ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { Box } from '@mui/system';
import { IconButton, Grid, CardActions, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

import { PATH_PROJEKTE } from '../../routes/paths';
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { deleteProjectFromFirestore } from '../../utils/apis/deleteFromFirestore';
import { deleteImage } from 'src/utils/apis/uploadPhoto';

export function TextCardCom({
  project,
  big,
  rewerseBig,
  setSucces,
  setLoading,
  setError,
}: {
  project: ProjectType,
  big: boolean,
  rewerseBig: boolean,
  setSucces: Dispatch<SetStateAction<string | boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<{
    code: string;
    message: string;
  } | null>>;

}) {

  const { title, location, id, objektAlter, photo, photos } = project;
  const [open, setOpen] = useState(false);
  const isDesktop = useResponsive('up', 'lm');
  const isMiddle = useResponsive('down', 'md');
  const isSmall = useResponsive('down', 'sm');
  const { isAuthenticated } = useAuth();
  const isBigAndDisplaysDesktop = isDesktop && big;

  const cardPropsBig = {
    gridColumn: rewerseBig ? '1 / span 2' : '4 / span 2',
    gridRow: 'span 2',
    backgroundColor: 'background.default'
  };
  const propsGridTextBox = {
    backgroundColor: 'background.paper',
    minHeight: big ? '300px' : '100px',
    height: '100%',

  };
  const propsCardContent = {
    pl: isMiddle ? 1.8 : 3.15,
    pr: isMiddle ? 1.8 : 3.15,
    pt: isMiddle ? 2 : 4.75,
    width: '100%',
    cursor: 'pointer',
    height: isAuthenticated ? '70%' : '100%',
    '&:hover': {
      textShadow: '#979797 1px 0 10px'
    },
    '&:focus': {
      textShadow: '#979797 1px 0 10px'
    },
  };
  const propsIcon = {
    fontSize: isMiddle ? 20 : 'middle'
  };

  function handleOpen() {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  };
  function handleDelete(id: any, photo: string, photos: [] | ImageType[]) {

    setLoading(true);
    deleteProjectFromFirestore('projects', id)
      .then(() => {
        deleteImage(photo);
        photos.map((photo: ImageType) => deleteImage(photo.url));
        setLoading(false);
        setSucces(true);
      })
      .catch((error) => {
        //console.log('error', error);
        setError(error);
        setLoading(false);
      });

    setOpen(false);
  };
  const Icons = () => (
    <>
      <Link href={`${PATH_PROJEKTE.editProject}/${id}`} passHref >
        <IconButton aria-label={'edit'}>
          <EditRoundedIcon sx={{ ...propsIcon }} />
        </IconButton>
      </Link>
      <IconButton
        aria-label={'delete'}
        onClick={handleOpen}
      >
        <DeleteIcon sx={{ ...propsIcon }} />
      </IconButton>
    </>
  )

  const TextBox = () => (
    <Grid
      container
      className="Card Content maxHeight144"
      direction='column'
      justifyContent="space-between"
      sx={{ ...propsGridTextBox }}
    >
      <Link href={`${PATH_PROJEKTE.projekt}/${id}`} passHref >
        <CardContent
          sx={{ ...propsCardContent }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{ color: 'dima', }}        >
            {objektAlter.toUpperCase()}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: 'text.secondary',
              pt: .4,
            }}        >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              pt: .4,
              color: 'text.secondary'
            }}>
            {firstLettersBig(location)}
          </Typography>
        </CardContent>
      </Link>
      {isAuthenticated && <CardActions sx={{ p: 0 }}>
        <Icons />
      </CardActions>}
    </Grid>
  )
  const MyDialog = () => (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle >Bist du siecher, dass du das Projekt löschen willst?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Das {title.toUpperCase()} Projekt wird unwiederbringlich gelösched.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          //deleteImage(photo.url);
          handleDelete(id, photo.url, photos)
        }}>Löschen</Button>
        <Button onClick={handleClose} autoFocus variant="outlined">
          Nein!
        </Button>
      </DialogActions>
    </Dialog>
  )

  return (
    <>
      {!isBigAndDisplaysDesktop && <TextBox />}
      {isBigAndDisplaysDesktop &&
        <Card sx={big && { ...cardPropsBig }} >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: rewerseBig ? '1fr 12px' : '12px 1fr',
            }}
          >
            <Box className='between' sx={{
              backgroundColor: 'background.paper',
              gridRow: 'span 2',
              gridColumn: rewerseBig ? '2' : '1',
            }}>
            </Box>
            <TextBox />
          </Box>
        </Card>
      }
      <MyDialog />
    </>
  )
}


/*
<Alert severity="error" onClose={() => { setError(null) }} >Fehler:{error.message} </Alert>
*/