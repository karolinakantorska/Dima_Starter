import React from 'react';
import { Typography, ButtonBase } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import Link from 'next/link';
type Props = {
    colorRGB: string,
    color: string,
    text: string,
    href: string
};
export default function LandingButtonCom({ colorRGB, color, text, href }: Props) {
    const isSmall = useResponsive('down', 'sm');
    const router = useRouter();
    const handleClick = () => {

        router.push(href);
    }
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

        <ButtonBase
            component="a"
            href={href}
            onClick={handleClick}
            sx={{
                ...buttonProps,
            }}
        >
            <Typography
                variant="body2" component="p"
                sx={{
                    color: "inherit",
                }} >
                {isSmall ? `${text}` : `Unsere ${text}`}
            </Typography>
            <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit" }} />
        </ButtonBase>






    )
}
