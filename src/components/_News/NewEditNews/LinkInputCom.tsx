import { Button, Stack, Typography } from '@mui/material';
import { useFormContext, useFieldArray, } from 'react-hook-form';
import { RHFTextField } from '../../hook-form';


export function LinkInputCom() {
    const {
        control,
        watch,
    } = useFormContext();
    const values = watch();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'link',
    });
    return (
        <Stack spacing={3}>
            {fields.map((field, i) => (
                <div key={i}>
                    <RHFTextField variant="filled" name={`link[${i}].url`} label='label' />
                    <RHFTextField variant="filled" name={`link[${i}].text`} label='label' />
                </div>

            ))}
            <Button variant="contained" color="secondary" onClick={(e) => { e.preventDefault(); append({ url: values.link.url, text: values.link.text }) }} >
                <Typography variant="body2" sx={{ color: 'dima' }}>Anhängen</Typography>
            </Button>
        </Stack>
    )
}
