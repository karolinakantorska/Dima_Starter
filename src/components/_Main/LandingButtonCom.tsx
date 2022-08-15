import React from 'react';
import { Typography, ButtonBase } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
type Props = {
    colorRGB: string,
    color: string,
    text: string,
    href: string
};
export default function LandingButtonCom({ colorRGB, color, text, href }: Props) {
    const isSmall = useResponsive('down', 'sm');
    const buttonProps = {
        height: isSmall ? '50px' : '10vw',
        width: isSmall ? '280px' : '35vw',
        maxWidth: '280px',
        maxHeight: '86px',
        p: 0,
        color: 'text.primary',
        transition: '0.3s',
        backgroundColor: `rgba(${colorRGB}, .7)`,
        '&:hover': {
            boxShadow: `inset 0px -100px rgba(${colorRGB}, 1)`,
            color: color
        },
        '&:focus': {
            boxShadow: `inset 0px -100px rgba(${colorRGB}, 1)`,
            color: color
        },
    }
    return (
        <Link href={href} passHref >
            <ButtonBase
                sx={{
                    ...buttonProps,
                }}
            >
                <Typography
                    variant="body2" component="a"
                    sx={{
                        color: "inherit",
                    }} >
                    {isSmall ? `${text}` : `Unsere ${text}`}
                </Typography> <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit" }} />
            </ButtonBase>
        </Link>

    )
}
/*
        <Link href={href} passHref >
            <ButtonBase
                sx={{
                    ...buttonProps,
                }}
            >
                <Typography
                    variant="body2" component="a"
                    sx={{
                        color: "inherit",
                    }} >
                    {isSmall ? `${text}` : `Unsere ${text}`}
                </Typography> <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit" }} />
            </ButtonBase>
        </Link>
        */