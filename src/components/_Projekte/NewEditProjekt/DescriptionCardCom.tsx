import { useFormContext } from 'react-hook-form';
import { objektAlterArray, } from 'src/utils/TS/interface';
import {
    Card,

    Stack,
    Typography,

} from '@mui/material';
import {
    RHFTextField,

} from '../../hook-form';
export function DescriptionCardCom() {
    const {
        watch,
        setValue,
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
                Bezeichnung:
            </Typography>
            <RHFTextField
                variant="filled"
                multiline minRows={3}
                maxRows={12}
                name="description1"
            />
            <RHFTextField
                variant="filled"
                multiline minRows={3}
                maxRows={12}
                name="description2"
            />
            <RHFTextField
                variant="filled"
                multiline minRows={3}
                maxRows={12}
                name="description3"
            />
        </Stack>



    )
}