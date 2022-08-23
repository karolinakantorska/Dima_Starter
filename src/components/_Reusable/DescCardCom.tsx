import { Button, Stack, TextField, Typography } from '@mui/material';
import { Controller, useFormContext, useFieldArray, } from 'react-hook-form';
import { TitleTextCom } from './TitleTextCom';

export function DescCardCom({ name, text }: { name: string, text: string }) {
    const {
        control,
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
    });

    return (
        <Stack spacing={3}>
            <TitleTextCom text={text} />
            {fields.map((field, index) => (
                <Controller
                    key={field.id}
                    name={`${name}.${index}`}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <Stack direction="row" spacing={2}>
                            <TextField
                                variant="filled"
                                {...field}
                                fullWidth error={!!error}
                                helperText={error?.message}
                                multiline minRows={3}
                                maxRows={12}
                            />
                            <Button
                                onClick={() => remove(index)} sx={{ width: '55px', height: '55px' }} >
                                <Typography variant="body2" >x</Typography>
                            </Button>
                        </Stack>
                    )}
                />
            ))}
            <Button variant="contained" color="secondary" onClick={(e) => { e.preventDefault(); append(``) }} >
                <Typography variant="body2" sx={{ color: 'dima' }}>Anhängen</Typography>
            </Button>
        </Stack>
    )
}
