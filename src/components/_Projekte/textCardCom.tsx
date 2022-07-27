import Link from 'next/link';

// @mui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { Box } from '@mui/system';
import { IconButton, Grid, CardActions, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

import { PATH_PROJEKTE } from '../../routes/paths';
import useAuth from 'src/utils/firebaseAuth/useAuth';

export function TextCardCom({
  project,
  big,
  rewerseBig,
  open, setOpen, handleDelete }: {
    project: ProjectType, big: boolean, rewerseBig: boolean,
    open: boolean, setOpen: any, handleDelete: any
    ,
  }) {

  const { title, location, id, objektAlter, photo, photos } = project;

  const isDesktop = useResponsive('up', 'lm');
  const isMiddle = useResponsive('down', 'md');
  const { isAuthenticated } = useAuth();
  const isBigAndDisplaysDesktop = isDesktop && big;

  const pl = isMiddle ? 2 : 3.15;
  const pr = isMiddle ? 2 : 3.15;
  const pt = isMiddle ? 3 : 4.75;

  const cardPropsBig = {
    gridColumn: rewerseBig ? '1 / span 2' : '4 / span 2',
    gridRow: 'span 2',
    backgroundColor: 'background.default'
  }
  const propsGridTextBox = {
    backgroundColor: 'background.paper',
    minHeight: big ? '300px' : '100px',
    height: isAuthenticated ? '100%' : '70%',
  }
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  };

  const Icons = () => (
    <>
      <Link href={`${PATH_PROJEKTE.editProject}/${id}`} passHref >
        <IconButton aria-label={'edit'}>
          <EditRoundedIcon />
        </IconButton>
      </Link>
      <IconButton
        aria-label={'delete'}
        onClick={handleOpen}
      >
        <DeleteIcon />
      </IconButton>
    </>
  )

  const TextBox = () => (
    <Grid
      container
      direction='column'
      justifyContent="space-between"

      sx={{ ...propsGridTextBox }}
    >
      <Link href={`${PATH_PROJEKTE.projekt}/${id}`} passHref >
        <CardContent
          className="Card Content"
          sx={{
            pl: pl,
            pt: pt,
            pr: pr,
            cursor: 'pointer',
            height: '70%',
            '&:hover': {
              textShadow: '#979797 1px 0 10px'
            },
            '&:focus': {
              textShadow: '#979797 1px 0 10px'
            },
          }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: 'dima',

            }}        >
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
      {!isBigAndDisplaysDesktop
        && <Card  >
          <TextBox />
        </Card>}
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