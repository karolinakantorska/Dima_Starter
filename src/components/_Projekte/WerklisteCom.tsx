

// hooks
import { Box, Button, ButtonBase, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Stack, Typography } from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import { Dispatch, SetStateAction, useState } from 'react';

import useAuth from 'src/utils/firebaseAuth/useAuth';

import { PATH_PROJEKTE } from 'src/routes/paths';
import { deleteProjectFromFirestore } from 'src/utils/apis/deleteFromFirestore';
import { revalidateURL } from 'src/utils/myUtils/revalidateURL';
import { List } from './WerklisteListCom';
import WerklisteNewEditForm from './NewEditProjekt/WerklisteNewEditForm';


type Props = {
    item: any,
    setSucces: Dispatch<SetStateAction<string | boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<{
        code: string;
        message: string;
    } | null>>;
    loading: boolean;
}

// TODO use location instead use route
export function WerkCom({ item, setSucces, setLoading, setError, loading }: Props) {

    const [open, setOpen] = useState(false);
    const aktuell = new Date().toLocaleString('de-DE', { dateStyle: "long" }).slice(-4);

    const { isAuthenticated } = useAuth();
    function handleOpen() {
        setOpen(true);
    };
    function handleClose() {
        setOpen(false);
    };
    function handleDelete() {
        if (isAuthenticated) {
            setLoading(true);
            deleteProjectFromFirestore('listElement', item.id)
                .then(() => {
                    fetch(revalidateURL(PATH_PROJEKTE.werkliste)).then(() => {
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
    //const { query } = useRouter();
    const propsLink = {
        color: 'text.primary',
        mt: .8,
        '&:hover': {
            color: 'dima',
            textDecoration: 'none'
        },
        '&:focus': {
            color: 'dima',
            textDecoration: 'none'
        },
    }
    const propsButton = { height: '22px', fontSize: '1.1rem', px: 2, border: '1px solid rgb(207, 191, 175)', color: 'rgb(207, 191, 175)' }
    const Item = ({ item }: { item: List }) => (
        <Box sx={{ mt: .8 }} >
            <Typography variant="body1" component="span" >{item.title}</Typography>
            <Typography variant="body1" component="span" >{`, ${item.location} `}</Typography>
        </Box>

    );
    const ItemWithLink = ({ item }: { item: List }) => (
        <Link href={item.link} sx={propsLink} >
            <Typography variant="body1" component="span" >{item.title}</Typography>
            <Typography variant="body1" component="span" >{`, ${item.location} `}</Typography>
            <OpenInNewIcon sx={{ fontSize: '1rem' }} />
        </Link>
    );

    return (
        <div key={item.id}>
            {item.changed && <Typography
                variant="body1"
                component="p"
                sx={{ color: 'rgb(207, 191, 175)', pt: 3, pb: 1 }}
            >
                {item.newYear}{(item.newYear === aktuell) && ' | Aktuell'}
            </Typography>}
            <Stack direction="row" spacing={3}>
                {item.link ? <ItemWithLink item={item} /> : <Item item={item} />}
                {isAuthenticated && (
                    <ButtonBase onClick={handleOpen} focusRipple={true} sx={propsButton} >
                        Bearbeiten
                    </ButtonBase>
                )}
            </Stack>


            {isAuthenticated && <Dialog open={open} onClose={() => handleClose()}>
                <DialogTitle >{`Bearbeiten:`} </DialogTitle>
                <DialogContent>
                    <WerklisteNewEditForm isEdit={true} currentListElement={item} setSucces={setSucces} setLoading={setLoading} setError={setError} loading={loading} />
                </DialogContent>
                <DialogTitle >{`Löschen:`} </DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 4 }}>

                        <DialogContentText id="alert-dialog-description" component="span" >
                            {`Wolen Sie das Eingabe: ${item.title.toUpperCase()}`}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description" component="span" sx={{ color: 'error.main' }} variant="h6">
                            {` löschen?`}
                        </DialogContentText>
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        //deleteImage(photo.url);
                        handleDelete()
                    }}>Löschen</Button>
                    <Button onClick={handleClose} autoFocus variant="outlined">
                        Nein!
                    </Button>
                </DialogActions>
            </Dialog>}
        </div>
    )
}

/*
<EditIcon onClick={handleOpen} sx={{ fontSize: '1rem' }} />
*/