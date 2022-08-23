import { useFormContext, } from 'react-hook-form';
import {

    Stack,
} from '@mui/material';

import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { RHFTextField } from 'src/components/hook-form';

export function LocationCardCom() {
    const {
        watch,
    } = useFormContext();
    const values = watch();

    return (
        <Stack spacing={3}>
            <TitleTextCom text="Lokation:" />
            <RHFTextField variant="filled" name="location" label="Lokation" value={values.location} />
        </Stack>

    )
}