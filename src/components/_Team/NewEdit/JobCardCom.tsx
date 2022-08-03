import {
    Stack,
    Typography,

} from '@mui/material';
import { RHFTextField, } from '../../hook-form';

export function JobCardCom() {
    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{ color: 'dima', }}
            >
                Job:
            </Typography>
            <RHFTextField
                variant="filled"
                name="job1"
                label="Aufgabe"
            />
            <RHFTextField
                variant="filled"
                name="job2"
                label="Aufgabe - nach Bedarf" />
            <RHFTextField
                variant="filled"
                name="job3"
                label="Aufgabe - nach Bedarf" />
        </Stack>

    )
}