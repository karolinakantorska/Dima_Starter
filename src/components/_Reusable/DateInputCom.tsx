import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Stack, } from '@mui/material';
//import DatePicker from '@mui/lab/DatePicker';
import { DatePicker, } from '@mui/x-date-pickers/DatePicker';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import { CalendarPickerView } from '@mui/lab';
type Props = {
    name: string,
    views: CalendarPickerView[],
    label: string
}
export function DateInputCom({ name, views, label }: Props) {
    const {
        control,
    } = useFormContext();

    return (
        <Stack spacing={3}>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <DatePicker
                        views={views}
                        label={label}
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