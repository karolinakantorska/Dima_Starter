import React from 'react';
import { Container, Stack, ButtonGroup, } from '@mui/material';
import LandingButtonCom from './LandingButtonCom';

import NextLink from 'next/link';
import { PATH_DIMA, PATH_PROJEKTE } from 'src/routes/paths';


export default function LandingButtonsCom() {


    const containerProps = {
        position: 'relative',
        height: 0,
        top: '-50vh',
        mt: '-43px',
        zIndex: 2,
    }



    return (
        <Container sx={{ ...containerProps }}>
            <Stack >
                <ButtonGroup variant="text" >
                    <NextLink href={PATH_DIMA.philosophie} passHref>
                        <LandingButtonCom colorRGB="239, 123, 16" color="background.default" text="Philosophie" />
                    </NextLink>

                    <NextLink href={PATH_PROJEKTE.projekte} passHref >
                        <LandingButtonCom colorRGB="43,37,31" color='dima' text="Projekte" />

                    </NextLink>
                </ButtonGroup>
            </Stack>
        </Container>
    )
}
