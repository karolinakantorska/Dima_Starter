import {
    Stack,
    Typography,

} from '@mui/material';
import { RHFTextField, } from '../../hook-form';

export function EmailCardCom() {
    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{ color: 'dima', }}
            >
                Email:
            </Typography>
            <RHFTextField
                variant="filled"
                name="email"
                label="E-Mail"
            />

        </Stack>

    )
}