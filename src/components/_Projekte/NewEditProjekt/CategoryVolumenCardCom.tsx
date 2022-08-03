import { useFormContext } from 'react-hook-form';
import { regionenArray } from 'src/utils/TS/interface';
import {
    Typography,
    Stack,
    InputAdornment

} from '@mui/material';

import {
    RHFRadioGroup, RHFTextField,

} from '../../hook-form';
export function CategoryVolumenCardCom() {
    const { setValue, getValues, } = useFormContext();

    const regionen = regionenArray.slice();
    const REGION = regionen.map((entry: any) => ({ label: entry, value: entry }));

    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}
            >
                Region:
            </Typography>
            <RHFRadioGroup
                name="region"
                options={REGION}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />

            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}
            >
                Volumen:
            </Typography>
            <RHFTextField
                variant="filled"
                name="size"
                label="volumen"
                //placeholder="2"
                value={getValues('size') === 0 ? '' : getValues('size')}
                onChange={(event) => setValue('size', Number(event.target.value))}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">Mio. CHF</InputAdornment>,
                    type: 'number',
                }}
            />


        </Stack>


    )
}