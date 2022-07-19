import { Dispatch, SetStateAction } from 'react';
import { Container, Alert } from '@mui/material';

export function AlertCom({ succes, error, setError }:
    {
        succes: boolean | string,
        error: null | { code: string, message: string },
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
            {succes && <Alert severity="success">Projekt erfolgreich hinzugrifen!</Alert>}
            {error && <Alert severity="error" onClose={() => { setError(null) }} >Fehler:{error.message} </Alert>}
        </Container>
    )
}