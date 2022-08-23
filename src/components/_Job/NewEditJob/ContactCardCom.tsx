import { useFormContext } from 'react-hook-form';
import { TitleTextCom } from '../../_Reusable/TitleTextCom';
import {
    Stack,
} from '@mui/material';
import { RHFTextField, } from '../../hook-form';
export function ContactCardCom() {
    const {
        watch,
    } = useFormContext();
    const values = watch();
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Kontaktperson:" />
            <RHFTextField variant="filled" name="kontaktperson" label="Name" value={values.kontaktperson} />
            <RHFTextField variant="filled" name="phone" label="Telefonnummer" value={values.phone} />
            <RHFTextField variant="filled" name="email" label="E-Mail" value={values.email} />
        </Stack>

    )
}