// @mui
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Stack } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { PATH_WEBCAMS } from 'src/routes/paths';
import { deleteProjectFromFirestore } from 'src/utils/apis/deleteFromFirestore';
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { revalidateURL } from 'src/utils/myUtils/revalidateURL';
import { Webcam } from 'src/utils/TS/interface';
// hooks 
import useResponsive from '../../hooks/useResponsive';
import { BodyTextCom } from '../_Reusable/BodyTextCom';
import { EditDeleteIconCom } from '../_Reusable/EditDeleteIconCom';
import { TitleTextCom } from '../_Reusable/TitleTextCom';

type Props = {
  wcam: Webcam,
  setSucces: Dispatch<SetStateAction<string | boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<{
    code: string;
    message: string;
  } | null>>;
  loading: boolean;
}
export function WebcamsCardCom({ wcam, setSucces, setLoading, setError }: Props) {
  const { title, date, link, id } = wcam;

  const isDonatsch = link.includes("https://webcamdonatsch.ch/");
  const [open, setOpen] = useState(false);
  const isSmall = useResponsive('down', 'sm');
  const isMiddle = useResponsive('down', 'md');
  const { isAuthenticated } = useAuth();
  const propsContainer = {
    boxSizing: 'border-box',
    outline: '5px solid #2B251F',
    display: 'grid',
    gridAutoRows: 'auto 70px'
  };
  const propsIFrameContainer = {
    height: isMiddle ? isSmall ? '250px' : '380px' : '280px',

  };
  const propsIFrame = isDonatsch
    ?
    {
      pointerEvents: 'none',
      height: '900px',
      width: '900px',
      overflow: 'hidden',
      mt: isMiddle ? '-320px' : '-320px',
      ml: isMiddle ? '-18px' : '-24px',
    }
    : {
      pointerEvents: 'none',
      height: isMiddle ? '600px' : '400px',
      width: isMiddle ? '1050px' : '600px',
      overflow: 'hidden',
      mt: isMiddle ? '-100px' : '-110px',
      ml: isMiddle ? '-40%' : '-2px'
    };
  const propsCard = {
    pl: 2.25,
    pt: 1.60,
    pb: 1.1,

  };

  function handleOpen(e: Event) {
    e.stopPropagation();
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  };
  function handleDelete() {
    if (isAuthenticated) {
      setLoading(true);
      deleteProjectFromFirestore('webcams', id)
        .then(() => {
          fetch(revalidateURL(PATH_WEBCAMS.webcams)).then(() => {
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
    }
  };
  const LinkEvent = () =>
  (<Link
    href={link}
    //target="_blank"
    rel="noopener"
    underline="none"
    aria-label={`Link zum ${title} Baucam`}
  >
    <Box
      sx={{
        position: 'absolute',
        backgroundColor: 'text.white',
        width: '100%',
        height: '100%',
        bottom: 0,
        cursor: 'pointer',
        opacity: 0,
        ariaLabel: `Link zum ${title} Baucam`,
        '&:hover': {
          opacity: 0.1,
        }
      }} />
  </Link>)

  return (
    <>
      <Card sx={{ ...propsContainer }}>
        <Box sx={{ ...propsIFrameContainer }}>
          {isAuthenticated &&
            <Stack sx={{
              position: 'absolute',
              zIndex: 2,
              width: '100%',
              flexDirection: "row",
              justifyContent: "flex-end"
            }}>
              <Box sx={{
                pt: 2
              }}>
                <EditDeleteIconCom
                  handleOpen={handleOpen} editURL={`${PATH_WEBCAMS.editWebcam}/${id}`}
                />
              </Box>
            </Stack>}
          <Box
            component='iframe'
            src={link}
            title={title}
            loading='lazy'
            scrolling="no"
            seamless
            sx={{ ...propsIFrame }}
            className="iFrame Container"
          >
            <p>Ihr Browser unterstützt keine iframes.</p>
          </Box>
        </Box>
        <Card sx={{ ...propsCard }}>
          <TitleTextCom text={`${title.toUpperCase()}`} />
          <BodyTextCom text={`Im Bau - Realisierung Geplant Auf ${new Date(date).toLocaleString('de-DE', { year: 'numeric' })} `} />
        </Card>
        <LinkEvent />
      </Card >



      {isAuthenticated &&
        <Dialog open={open} onClose={() => handleClose()}>
          <DialogTitle >{`Löschen:`} </DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 4 }}>
              <DialogContentText id="alert-dialog-description" component="span" >
                {`Wolen Sie das Eingabe: ${title.toUpperCase()}`}
              </DialogContentText>
              <DialogContentText id="alert-dialog-description" component="span" sx={{ color: 'error.main' }} variant="h6">
                {` löschen?`}
              </DialogContentText>
            </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              handleDelete()
            }}>Löschen</Button>
            <Button onClick={handleClose} autoFocus variant="outlined">
              Nein!
            </Button>
          </DialogActions>
        </Dialog>}
    </>
  )
}
