import { useFormContext } from 'react-hook-form';

import { Stack, } from '@mui/material';
import { RHFTextField, } from '../../hook-form';
import { TitleTextCom } from '../../_Reusable/TitleTextCom';
export function DescriptionCardCom() {
    const {
        watch,

    } = useFormContext();
    const values = watch();
    const fields = [1, 2, 3, 4, 5]
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Bezeichnung:" />

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