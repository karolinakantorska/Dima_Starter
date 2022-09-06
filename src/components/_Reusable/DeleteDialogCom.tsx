import React from 'react';

// @mui
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material';


export function DeleteDialogCom({
    open,
    handleClose,
    handleDelete,
    objectToBeDeled,
    titleOfObjectToBeDeled,
}: {
    open: boolean,
    handleClose: () => void,
    handleDelete: () => void,
    objectToBeDeled: string,
    titleOfObjectToBeDeled: string,

}) {
    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogTitle >{`Bist du sicher, dass du das ${objectToBeDeled} löschen willst?`} </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Das ${titleOfObjectToBeDeled.toUpperCase()} Projekt wird unwiederbringlich gelöscht.`}
                </DialogContentText>
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
        </Dialog>
    )
}
