import {
    Stack,
    Typography,

} from '@mui/material';
import {
    RHFTextField,
    //RHFEditor,
} from '../../hook-form';
export function AuthorsCardCom() {
    return (
        <Stack spacing={3} sx={{ pt: 8 }}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}        >
                Betailigte Unternehmern:
            </Typography>
            <RHFTextField variant="filled" name="client" label="Bauherr" />
            <RHFTextField variant="filled" name="architect" label="Architekt" />
            <RHFTextField variant="filled" name="realisation" label="GU, TU Bauleitung" />
        </Stack>
    )
}
