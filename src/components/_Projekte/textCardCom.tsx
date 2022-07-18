import Link from 'next/link';
import { useState, } from 'react';
// @mui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { Box } from '@mui/system';
import { IconButton, Grid, CardActions, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Alert } from '@mui/material';
import { deleteProjectFromFirestore } from 'src/utils/apis/deleteFromFirestore';
import { useRouter } from 'next/router';
import { PATH_PROJEKTE } from '../../routes/paths';
import useAuth from 'src/utils/firebaseAuth/useAuth';


export function TextCardCom({ project, big, rewerseBig, }: {
  project: ProjectType, big: boolean, rewerseBig: boolean
  ,
}) {


  const [open, setOpen] = useState(false);
  const [error, setError] = useState<null | { code: string, message: string }>(null);
  const { title, location, id, objektAlter, } = project;

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
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  };
  function handleDelete() {
    deleteProjectFromFirestore('projects', id)
      .catch((error) => {
        console.log('error', error);
        //setError(error)
        //setLoading(false);
      })
    setOpen(false);
  };
  const Icons = () => (
    <>
      <Link href={`${PATH_PROJEKTE.editProject}/${id}`}  >
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
      className="big"
      container
      direction='column'
      justifyContent="space-between"
      sx={big ? { backgroundColor: 'background.paper', minHeight: '300px' } : { height: '100%' }}
    >
      <CardContent
        className="Card Content"
        sx={{ pl: pl, pt: pt, pr: pr }}
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
            pt: 1,
          }}        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            mb: 2,
            pt: 1,
            color: 'text.secondary'
          }}>
          {firstLettersBig(location)}
        </Typography>
      </CardContent>
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
        <Button onClick={handleDelete}>Löschen</Button>
        <Button onClick={handleClose} autoFocus variant="outlined">
          Nein!
        </Button>
      </DialogActions>
    </Dialog>
  )

  return (
    <>
      {error && <Alert severity="error" onClose={() => { setError(null) }} >Fehler:{error.message} </Alert>}
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
              backgroundColor: 'background.default',
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


