import { useFormContext } from 'react-hook-form';
import { regionenArray } from 'src/utils/TS/interface';
import {

    Typography,

    Stack

} from '@mui/material';

import {
    RHFRadioGroup,

} from '../../hook-form';
export function CategoryCardCom() {
    const {
        watch,

    } = useFormContext();

    const values = watch();

    const regionen = regionenArray.slice();
    const REGION = regionen.map((entry: any) => ({ label: entry, value: entry }));
    const STAGE = [{ label: 'Im Bau', value: false }, { label: 'Realisiert', value: true }];

    return (
        <Stack spacing={3}>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',
                }}
            >
                Region:
            </Typography>
            <RHFRadioGroup
                name="region"
                options={REGION}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
            <Typography
                variant="body2"
                component="p"
                sx={{
                    color: 'dima',

                }}
            >
                Projektphase :
            </Typography>
            <RHFRadioGroup
                name="finished"
                options={STAGE}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
        </Stack>


    )
}