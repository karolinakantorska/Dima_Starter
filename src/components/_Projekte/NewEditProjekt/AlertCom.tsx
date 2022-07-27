import { Dispatch, SetStateAction } from 'react';
import { Container, Alert, CircularProgress, Stack } from '@mui/material';

export function AlertCom({ succes, error, loading, setError }:
    {
        succes: boolean | string,
        error: null | { code: string, message: string },
        loading: boolean,
        setError: Dispatch<SetStateAction<{
            code: string;
            message: string;
        } | null>>
    }) {
    return (
        <Container sx={{
            position: 'sticky',
            zIndex: 1200,
            top: 88,
        }}>
            {succes && <Alert severity="success">Eingabe erfolgreich aktualisiert!</Alert>}
            {error && <Alert severity="error" onClose={() => { setError(null) }} >Fehler:{error.message} </Alert>}
            {loading && <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
            ><CircularProgress /></Stack>}
        </Container>
    )
}