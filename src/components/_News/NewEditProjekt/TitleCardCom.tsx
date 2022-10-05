import { useFormContext } from 'react-hook-form';
import { objektAlterArray, } from 'src/utils/TS/interface';
import { TitleTextCom } from '../../_Reusable/TitleTextCom';
import {
    Stack,
} from '@mui/material';
import {

    RHFTextField,
    RHFRadioGroup,
    //RHFEditor,
} from '../../hook-form';
export function TitleCardCom() {
    const {
        watch,
    } = useFormContext();

    const values = watch();
    const objektAlterArr = objektAlterArray.slice();
    const OBJECT_ALTER = objektAlterArr.map((entry) => ({ label: entry, value: entry }));

    return (
        <Stack spacing={3}>
            <TitleTextCom text="Projecttitle:" />
            <RHFRadioGroup

                name="objektAlter"
                options={OBJECT_ALTER}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
            <RHFTextField variant="filled" name="title" label="Projekttitle" value={values.title} />
            <RHFTextField variant="filled" name="location" label="Ort" />
        </Stack>

    )
}