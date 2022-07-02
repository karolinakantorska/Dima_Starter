
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const SnackbarCom = ({
    open,
    handleClose,
    text,
    duration,
    severity
}: {
    open: boolean,
    handleClose: any,
    text: string,
    duration: number,
    severity: 'error' | 'info' | 'success' | 'warning'
}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={duration}
            open={open}
            sx={{ marginTop: 4 }}
            onClose={handleClose}
        >
            <Alert
                variant="outlined"
                severity={severity}
                sx={{ width: '100%' }}
            >{text}
            </Alert>
        </Snackbar>
    )
}