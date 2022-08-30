import { minProcentArray, procentArray } from 'src/utils/TS/interface';
import { Stack, } from '@mui/material';
import { RHFRadioGroup, } from '../../hook-form';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';

export function ProcentCardCom() {

    const procent = procentArray.slice();
    const PROCENT = procent.map((entry: any) => ({ label: entry, value: entry }));
    const minProcent = minProcentArray.slice();
    const MIN_PROCENT = minProcent.map((entry: any) => ({ label: entry, value: entry }));
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Minimalpensum:" />
            <RHFRadioGroup
                name="procentMin"
                options={MIN_PROCENT}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 2 },
                }}
            />
            <TitleTextCom text="Pensum:" />
            <RHFRadioGroup
                name="procent"
                options={PROCENT}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 2 },
                }}
            />
        </Stack>


    )
}