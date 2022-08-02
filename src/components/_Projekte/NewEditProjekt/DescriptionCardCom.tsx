import { useFormContext } from 'react-hook-form';

import { Stack, Typography, } from '@mui/material';
import { RHFTextField, } from '../../hook-form';
export function DescriptionCardCom() {
    const {
        watch,

    } = useFormContext();
    const values = watch();
    const fields = [1, 2, 3, 4, 5]
    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}
            >
                Bezeichnung:
            </Typography>
            {fields.map((f) => (
                <RHFTextField
                    key={f}
                    variant="filled"
                    multiline minRows={3}
                    maxRows={12}
                    name={"description" + f}
                />
            ))}
        </Stack>
    )
}