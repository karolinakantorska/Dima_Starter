import { useFormContext, Controller } from 'react-hook-form';
import {
    TextField,
    Stack,

} from '@mui/material';
//import DatePicker from '@mui/lab/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';


export function YearCardCom() {
    const {
        control,
    } = useFormContext();

    return (
        <Stack spacing={3}>
            <TitleTextCom text="Veröffentlicht am: " />
            <Controller
                name="announcment_form"
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <DatePicker
                        //views={['year', 'month', 'day']}
                        label="Veröffentlicht am"
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
        </Stack>

    )
}