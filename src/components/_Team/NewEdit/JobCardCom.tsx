import {
    Stack,
} from '@mui/material';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { RHFTextField, } from '../../hook-form';

export function JobCardCom() {
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Job: " />
            <RHFTextField
                variant="filled"
                name="job1"
                label="Aufgabe"
            />
            <RHFTextField
                variant="filled"
                name="job2"
                label="Aufgabe - nach Bedarf" />
        </Stack>

    )
}