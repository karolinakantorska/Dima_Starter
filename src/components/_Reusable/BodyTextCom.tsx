import React from 'react';
// @mui
import { Typography, TypographyProps } from '@mui/material';

type IProps = {
    text: string;
};
type Props = IProps & TypographyProps;

export function BodyTextCom({
    text,
    ...other
}: Props) {
    const { sx } = other;
    return (
        <Typography variant="body1" component="p" sx={{ color: 'text.secondary', ...sx }} >
            {text}
        </Typography >
    )
}

