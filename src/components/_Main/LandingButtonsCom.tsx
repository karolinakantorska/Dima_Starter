import React from 'react';
import { Container, Stack, ButtonGroup, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useResponsive from '../../hooks/useResponsive';
import NextLink from 'next/link';
import { PATH_DIMA, PATH_PROJEKTE } from 'src/routes/paths';
const ButtonStyle = styled(Button)(({ theme }) => ({

    backgroundColor: theme.palette.background.opacity,
    border: '1px solid grey',
    [theme.breakpoints.up('md')]: {
        //height: HEADER.MAIN_DESKTOP_HEIGHT,
    },
}));
export default function LandingButtonsCom() {
    const isDesktop = useResponsive('up', 'lm');
    const isSmall = useResponsive('down', 'sm');

    const containerProps = {
        position: 'fixed',
        top: isDesktop ? '60%' : '60%',
        left: isDesktop ? '30%' : isSmall ? 0 : '20%',
        zIndex: 2,
    }
    const fontSize = isDesktop ? 30 : isSmall ? 24 : 28
    return (
        <Container sx={{ ...containerProps }}>
            <Stack >

                <ButtonGroup
                    size="large"
                    //variant="contained"
                    color="inherit"
                >
                    <NextLink href={PATH_DIMA.teams} >
                        <ButtonStyle size="large" >
                            <Typography variant="button" component="h2" sx={{ fontSize: 30, borderWidth: 5 }} >
                                Vision
                            </Typography>
                        </ButtonStyle>
                    </NextLink>



                    <NextLink href={PATH_PROJEKTE.projekte} >
                        <ButtonStyle size="large">
                            <Typography variant="button" component="h2" sx={{ fontSize: 30, color: "dima" }} >
                                Projekte
                            </Typography>
                        </ButtonStyle>
                    </NextLink>


                </ButtonGroup>
            </Stack>
        </Container>
    )
}
/*
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
width: 100%;
height: 100%;
*/