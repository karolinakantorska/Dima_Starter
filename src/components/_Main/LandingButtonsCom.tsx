import React from 'react';
import { Container, Stack, ButtonGroup, Typography, ButtonBase } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';
import NextLink from 'next/link';
import { PATH_DIMA, PATH_PROJEKTE } from 'src/routes/paths';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LandingButtonsCom() {
    const isSmall = useResponsive('down', 'sm');

    const containerProps = {
        position: 'relative',
        height: 0,
        top: '-50vh',
        mt: '-43px',
        zIndex: 2,
    }
    const height = isSmall ? '50px' : '10vw';
    const width = isSmall ? '280px' : '35vw';

    const buttonProps = {
        height: height,
        width: width,
        maxWidth: '280px',
        maxHeight: '86px',
        p: 0,
        color: 'text.primary',
        transition: '0.3s',
    }
    return (
        <Container sx={{ ...containerProps }}>
            <Stack >
                <ButtonGroup variant="text" >
                    <NextLink href={PATH_DIMA.philosophie} passHref>
                        <ButtonBase
                            sx={{
                                ...buttonProps,
                                backgroundColor: 'rgba(239, 123, 16, .7)',

                                '&:hover': {
                                    boxShadow: 'inset 0px -100px rgba(239, 123, 16, 1)',
                                    color: 'background.default'
                                },
                                '&:focus': {
                                    boxShadow: 'inset 0px -100px rgba(239, 123, 16, 1)',
                                    color: 'background.default'
                                },
                            }}
                        >
                            <Typography
                                variant="body2" component="a"
                                sx={{
                                    color: "inherit",
                                }} >
                                {isSmall ? `Philosophie` : `Unsere Philosophie`}
                            </Typography> <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit" }} />
                        </ButtonBase>
                    </NextLink>

                    <NextLink href={PATH_PROJEKTE.projekte} passHref >
                        <ButtonBase
                            sx={{
                                ...buttonProps,
                                backgroundColor: 'rgba(43,37,31,0.7)',

                                '&:hover': {

                                    boxShadow: 'inset 0px -100px rgba(43,37,31,1)',
                                    color: 'dima'
                                },
                                '&:focus': {
                                    opacity: 1,
                                    boxShadow: 'inset 0px -100px rgba(43,37,31,1)',
                                    color: 'dima'
                                },
                            }}
                        >
                            <Typography
                                variant="body2" component="a"
                                sx={{
                                    color: "inherit",
                                }} >
                                {isSmall ? `Projekte` : `Unsere Projekte`}
                            </Typography>
                            <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit", }} />
                        </ButtonBase>
                    </NextLink>
                </ButtonGroup>
            </Stack>
        </Container>
    )
}
