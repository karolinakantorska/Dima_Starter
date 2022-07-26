import { useFormContext } from 'react-hook-form';
import { objektAlterArray, } from 'src/utils/TS/interface';
import {
    Card,

    Stack,
    Typography,

} from '@mui/material';
import {

    RHFTextField,
    RHFRadioGroup,
    //RHFEditor,
} from '../../hook-form';
export function AuthorsCardCom() {
    const {
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const values = watch();

    return (

        <Stack spacing={3} sx={{ pt: 8 }}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',

                }}        >
                Betailigte Unternehmern:
            </Typography>
            <RHFTextField variant="filled" name="client" label="Bauherr" />
            <RHFTextField variant="filled" name="architect" label="Architekt" />
            <RHFTextField variant="filled" name="realisation" label="Ausführung" />
        </Stack>

    )
}