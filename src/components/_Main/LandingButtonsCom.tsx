import React from 'react';
import { Container, Stack, ButtonGroup, Button, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import useResponsive from '../../hooks/useResponsive';
import NextLink from 'next/link';
import { PATH_DIMA, PATH_PROJEKTE } from 'src/routes/paths';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Philosophie from '../../pages/dima/philosophie';

const ButtonStyle = styled(Button)(({ theme }) => ({

    //backgroundColor: theme.palette.background.opacity,
    //border: '1px solid grey',
    [theme.breakpoints.up('md')]: {
        //height: HEADER.MAIN_DESKTOP_HEIGHT,
    },
}));
export default function LandingButtonsCom() {
    const isDesktop = useResponsive('up', 'lm');
    const isSmall = useResponsive('down', 'sm');

    const containerProps = {
        position: 'relative',
        top: '-50vh',
        mt: '-43px',
        //top: isDesktop ? '60%' : '60%',
        //left: isDesktop ? '30%' : isSmall ? 0 : '20%',
        zIndex: 2,
    }
    const fontSize = isDesktop ? 30 : isSmall ? 24 : 28
    return (
        <Container sx={{ ...containerProps }}>
            <Stack >

                <ButtonGroup variant="text" >
                    <NextLink href={PATH_DIMA.teams} >

                        <ButtonBase
                            sx={{
                                height: '86px',
                                width: '280px',
                                p: 0,
                                backgroundColor: 'dima',
                                opacity: 0.85,
                                color: 'text.primary',
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
                                Unsere Philosophie
                            </Typography> <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit" }} />
                        </ButtonBase>
                    </NextLink>

                    <NextLink href={PATH_PROJEKTE.projekte} >
                        <ButtonBase
                            sx={{
                                height: '86px',
                                width: '280px',
                                p: 0,
                                backgroundColor: 'background.default',
                                opacity: 0.85,
                                color: 'text.primary',
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
                                unsere Projekte
                            </Typography>
                            <ArrowForwardIosIcon sx={{ ml: '16px', color: "inherit", }} />
                        </ButtonBase>
                    </NextLink>


                </ButtonGroup>
            </Stack>
        </Container>
    )
}
