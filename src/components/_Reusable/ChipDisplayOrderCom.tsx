import React from 'react';
// @mui
import { Grid, Typography, } from '@mui/material';

export function ChipDisplayOrderCom({
    displayOrder
}: {
    displayOrder: number
}) {
    const propsTypo = {
        color: 'background.default',
    }
    const propsBox = {
        mt: '10px',
        mr: '15px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
        height: '32px',
        width: '32px',
        direction: "row",
        justifyContent: "center",
        alignItems: "center",

    }
    return (
        <Grid sx={propsBox} container>
            <Typography variant="body2" sx={propsTypo}>{displayOrder}</Typography>
        </Grid>

    )
}
