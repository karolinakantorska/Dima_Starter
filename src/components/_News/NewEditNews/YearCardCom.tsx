import { useFormContext, Controller } from 'react-hook-form';
import {
    TextField,
    Stack,

} from '@mui/material';
//import DatePicker from '@mui/lab/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { RHFRadioGroup, } from '../../hook-form';
import { phaseArray } from 'src/utils/TS/interface';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';

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
            <TitleTextCom text="Projektphase: " />
            <RHFRadioGroup
                name="phase"
                options={PHASE}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
            {(values.phase === 'Gebaut') &&
                <>
                    <TitleTextCom text="Bauzeit: " />
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