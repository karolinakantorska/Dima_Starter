import {
    Stack,
} from '@mui/material';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';
import {
    RHFTextField,
    //RHFEditor,
} from '../../hook-form';
export function AuthorsCardCom() {
    return (
        <Stack spacing={3} sx={{ pt: 8 }}>
            <TitleTextCom text="Beteiligte Unternehmen:" />
            <RHFTextField variant="filled" name="client" label="Bauherr" />
            <RHFTextField variant="filled" name="architect" label="Architekt" />
            <RHFTextField variant="filled" name="realisation" label="GU, TU Bauleitung" />
        </Stack>
    )
}
