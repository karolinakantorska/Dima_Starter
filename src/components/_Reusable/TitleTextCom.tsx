import React from 'react';

// @mui
import { Typography, TypographyProps } from '@mui/material';

type IProps = {
    text: string;
};
type Props = IProps & TypographyProps;

export function TitleTextCom({
    text,
    ...other
}: Props) {
    const { sx } = other;
    return (
        <Typography
            variant="body1"
            component="h3"
            sx={{ color: 'dima', ...sx }}>
            {text}
        </Typography>
    )
}
