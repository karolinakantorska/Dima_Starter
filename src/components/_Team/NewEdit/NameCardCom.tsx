import {
    Stack,
    Typography,

} from '@mui/material';
import { RHFTextField, } from '../../hook-form';

export function NameCardCom() {
    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{ color: 'dima', }}
            >
                Mitarbeiter:
            </Typography>
            <RHFTextField
                variant="filled"
                name="name"
                label="Vorname"
            />
            <RHFTextField
                variant="filled"
                name="surname"
                label="Nahname" />
        </Stack>

    )
}