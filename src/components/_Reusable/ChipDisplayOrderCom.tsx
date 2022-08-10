import React from 'react';
// @mui
import { Typography, } from '@mui/material';

import Chip from '@mui/material/Chip';


export function ChipDisplayOrderCom({
    displayOrder
}: {
    displayOrder: number
}) {
    const propsChip = {
        mt: '10px',
        mr: '10px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'background.default',
        height: '40px',
        width: '40px',

    }
    return (
        <>
            <Chip
                label={<Typography variant="body2">{displayOrder}</Typography>}
                color="secondary"
                sx={{ ...propsChip }}
            />
        </>
    )
}
