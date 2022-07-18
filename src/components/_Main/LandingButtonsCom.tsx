import React from 'react';
import { Container, Stack, ButtonGroup, Button, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import useResponsive from '../../hooks/useResponsive';
import NextLink from 'next/link';
import { PATH_DIMA, PATH_PROJEKTE } from 'src/routes/paths';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LandingButtonsCom() {
    const isDesktop = useResponsive('up', 'lm');
    const isSmall = useResponsive('down', 'sm');

    const containerProps = {
        position: 'relative',
        height: 0,
        top: '-50vh',
        mt: '-43px',
        //top: isDesktop ? '60%' : '60%',
        //left: isDesktop ? '30%' : isSmall ? 0 : '20%',
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
        opacity: 0.85,
        color: 'text.primary',
    }
    return (
        <Container sx={{ ...containerProps }}>
            <Stack >
                <ButtonGroup variant="text" >
                    <NextLink href={PATH_DIMA.philosophie} >
                        <ButtonBase
                            sx={{
                                ...buttonProps,
                                backgroundColor: 'dima',
                                '&:hover': {
                                    opacity: 1,
                                    backgroundColor: '#e96c0e',
                                    color: 'background.default'
                                }
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

                    <NextLink href={PATH_PROJEKTE.projekte} >
                        <ButtonBase
                            sx={{
                                ...buttonProps,
                                backgroundColor: 'background.default',
                                '&:hover': {
                                    opacity: 1,
                                    backgroundColor: 'background.default',
                                    color: 'dima'
                                }
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
