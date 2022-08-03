import {
    InputAdornment,
    Stack,
    Typography,

} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { RHFTextField, } from '../../hook-form';

export function TitleCardCom() {
    const { setValue, getValues, } = useFormContext();
    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{ color: 'dima', }}
            >
                Title:
            </Typography>
            <RHFTextField
                variant="filled"
                name="title1"
                label="title"
            />
            <RHFTextField
                variant="filled"
                name="title2"
                label="title - nach Bedarf" />
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}
            >
                Anzeigen Reihenfolge:
            </Typography>
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