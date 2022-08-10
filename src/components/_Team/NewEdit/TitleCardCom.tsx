import {
    Stack,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { RHFTextField, } from '../../hook-form';

export function TitleCardCom() {
    const { setValue, getValues, } = useFormContext();
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Beruf: " />

            <RHFTextField
                variant="filled"
                name="title1"
                label="Beruf"
            />
            <RHFTextField
                variant="filled"
                name="title2"
                label="Beruf - nach Bedarf" />
            <TitleTextCom text="Anzeigen Reihenfolge: " />
            <RHFTextField
                variant="filled"
                name="displayOrder"
                label="Anzeigen Reihenfolge 1-100"
                //placeholder="2"
                value={getValues('displayOrder') === 0 ? '' : getValues('displayOrder')}
                onChange={(event) => setValue('displayOrder', Number(event.target.value))}
                InputLabelProps={{ shrink: true }}

            />
        </Stack>

    )
}