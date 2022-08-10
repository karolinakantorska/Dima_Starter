import React from 'react';
import { Container, Stack, ButtonGroup, } from '@mui/material';
import LandingButtonCom from './LandingButtonCom';

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
                    <LandingButtonCom colorRGB="239, 123, 16" color="background.default" text="Philosophie" href={PATH_DIMA.philosophie} />
                    <LandingButtonCom colorRGB="43,37,31" color='dima' text="Projekte" href={PATH_PROJEKTE.projekte} />
                </ButtonGroup>
            </Stack>
        </Container>
    )
}
