import { useFormContext } from 'react-hook-form';
import { TitleTextCom } from '../../_Reusable/TitleTextCom';
import {
    Stack,
} from '@mui/material';
import { RHFTextField, } from '../../hook-form';
export function TitleCardCom() {
    const {
        watch,
    } = useFormContext();
    const values = watch();
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Jobtitle:" />
            <RHFTextField variant="filled" name="title" label="Jobtitle" value={values.title} />

        </Stack>

    )
}