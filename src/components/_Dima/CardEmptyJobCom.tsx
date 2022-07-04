import React from "react";

import { Card, } from '@mui/material';

export function CardEmptyJobCom({ color = 'background.between' }: { color?: string }) {
    return (<Card sx={{ height: 300, backgroundColor: color, boxShadow: 0 }} />
    )
}
