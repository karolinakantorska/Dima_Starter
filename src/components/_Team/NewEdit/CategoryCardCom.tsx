
import { jobLocationArray, jobCategoryArray } from 'src/utils/TS/interface';
import { Stack, } from '@mui/material';

import { RHFRadioGroup, } from '../../hook-form';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';

export function CategoryCardCom() {
    const cats = jobCategoryArray.slice();
    const JOBCAT = cats.map((entry: any) => ({ label: entry, value: entry }));

    const locations = jobLocationArray.slice();
    const JOBLOC = locations.map((entry: any) => ({ label: entry, value: entry }));


    return (
        <Stack spacing={3} >
            <TitleTextCom text="Arbeitsstelle:" />
            <RHFRadioGroup
                name="jobCategory"
                options={JOBCAT}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
            <TitleTextCom text="Arbeitsort:" />
            <RHFRadioGroup
                name="jobLocation"
                options={JOBLOC}
                sx={{
                    '& .MuiFormControlLabel-root': { mr: 4 },
                }}
            />
        </Stack>


    )
}