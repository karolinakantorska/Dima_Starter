import { useFormContext, Controller } from 'react-hook-form';
import {
    TextField,
    Stack,
    Typography,
} from '@mui/material';
//import DatePicker from '@mui/lab/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RHFRadioGroup, RHFTextField, } from '../../hook-form';
import { phaseArray } from 'src/utils/TS/interface';

export function YearCardCom() {
    const {
        control,
        watch,
    } = useFormContext();

    const values = watch();
    const phase = phaseArray.slice();
    const PHASE = phase.map((entry: any) => ({ label: entry, value: entry }));

    return (

        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',

                }}
            >
                Projektphase :
            </Typography>
            <RHFRadioGroup
                name="phase"
                options={PHASE}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
            {(values.phase === 'Gebaut') &&
                <>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{
                            color: 'dima',

                        }}
                    >
                        Bauzeit :
                    </Typography>

                    <Controller
                        name="year_start_form"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <DatePicker
                                views={['year']}
                                label="Baubegin"
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
                    <Controller
                        name="year_form"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <DatePicker
                                views={['year']}
                                label="Bauende"
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
                </>
            }

        </Stack>

    )
}