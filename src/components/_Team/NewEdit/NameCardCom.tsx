import React from 'react';
import {
    Stack,
} from '@mui/material';

import { RHFTextField, } from '../../hook-form';
import { TitleTextCom } from 'src/components/_Reusable/TitleTextCom';

export function NameCardCom() {
    return (
        <Stack spacing={3}>
            <TitleTextCom text="Mitarbeiter: " />

            <RHFTextField
                variant="filled"
                name="name"
                label="Vorname"
            />
            <RHFTextField
                variant="filled"
                name="surname"
                label="Nahname" />
        </Stack>

    )
}