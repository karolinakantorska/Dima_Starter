import {
    Stack,

} from '@mui/material';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { RHFTextField, } from '../../hook-form';

export function EmailCardCom() {
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Email: " />
            <RHFTextField
                variant="filled"
                name="email"
                label="E-Mail"
            />

        </Stack>

    )
}