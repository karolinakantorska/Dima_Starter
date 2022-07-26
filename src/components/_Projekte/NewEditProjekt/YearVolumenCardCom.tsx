import { useFormContext, Controller } from 'react-hook-form';
import {
    Card,
    TextField,
    Stack,
    Typography,
    InputAdornment

} from '@mui/material';
//import DatePicker from '@mui/lab/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RHFTextField, } from '../../hook-form';

export function YearVolumenCardCom() {
    const {
        control,
        watch,
        setValue,

        getValues,
        formState: { errors },
    } = useFormContext();

    const values = watch();
    return (

        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}
            >
                Project Eingaben:
            </Typography>
            <Controller
                name="year_form"
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <DatePicker
                        views={['year']}
                        label="Baujahr"
                        value={field.value}
                        onChange={(newValue) => {
                            field.onChange(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} variant="filled" fullWidth error={!!error} helperText={error?.message} />
                        )}
                    />
                )}
            />
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