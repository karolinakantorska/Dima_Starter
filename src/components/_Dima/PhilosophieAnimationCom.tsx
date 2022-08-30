import { m, } from 'framer-motion';
// @mui 
import { Box, Typography, } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

export function PhilosophieAnimationCom() {
    /*
    xs: 0,
        mobile: 450,
            sm: 600,
                md: 900,
                    lm: 1200,
                        lg: 1524,
                            xl: 1900,
                            */
    const isMin1917px = useResponsive('up', 'xl');
    //const isMax1916px = useResponsive('down', 'xl');
    const isMax1500px = useResponsive('down', 'lg');
    const isMax1200px = useResponsive('down', 'lm');
    const isMax900px = useResponsive('down', 'md');
    const isMax600px = useResponsive('down', 'sm');
    const isMax450px = useResponsive('down', 'mobile');

    //const b = calc(100vw - theme.spacing()*2)
    const transition0 = {
        type: 'tween',
        ease: 'linear',
        duration: 10
    }
    const transition = {
        type: 'tween',
        ease: 'linear',
        duration: 5
    }
    const variant = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: transition,
    };
    const propsContainer = {
        height: '800px',
        //border: 'solid black'
    }
    const propsBox = {
        height: '100%',
        width: '100%',
    }
    const propsBoxVert = {
        backgroundColor: 'dima',
        position: 'absolute',
        height: '100%',
        left: '16%',
        width: '0.2%',
    }
    const variantBoxVert = {
        initial: { y: '-100%' },
        animate: { y: [null, '0%', '0%', '-100%'] },
        transition: transition,
    };
    const propsBoxHoriz = {
        position: 'absolute',
        height: '20px',
        width: '7%',
        top: '50%',
        left: '6%',
    }
    const propsBoxHorizOrange = {
        backgroundColor: 'dima',
        position: 'absolute',
        height: '50%',
        width: '100%',
        top: '25%',
        //left: '2%',
    }
    const variantBoxHoriz = {
        initial: { x: '-190%' },
        animate: { x: [null, '0%', '0%', '0%', '280%', '280%', '280%', '430%', '430%', '780%', '780%', '780%'] },
        transition: transition0,
    };
    const propsTitle = {
        position: 'absolute',
        top: '50%',
        left: '19.2%',
    }
    const variantTitle = {
        initial: {
            x: '150%',
            y: '1%'
        },
        animate: {
            x: [null, '0%', '0%', '0%'],
            y: [null, '1%', '-2200%'],
            //opacity: [0, 1, 1, 1, 0],
        },
        transition: transition,
    };
    const propsWriting = {
        position: 'absolute',
        top: '40%',
        left: '23.2%',
    }
    const variantWriting = {
        initial: {
            y: '1%'
        },
        animate: {
            y: [null, '1%', '-500%'],
            opacity: [0, 1, 0],
        },
        transition: {
            type: 'tween',
            ease: 'linear',
            delay: 4,
            duration: 3
        },
    };
    const propsTitle2 = {
        position: 'absolute',
        top: '47%',
        left: '30.2%',
    }
    const variantTitle2 = {
        animate: {
            opacity: [0, 1, 1, 1, 1, 0],
        },
        transition: {
            type: 'tween',
            ease: 'linear',
            delay: 6,
            duration: 5
        },
    };
    const propsFinalWriting = {
        position: 'absolute',
        top: '41%',
        left: '1%',
        //left: '29%',
        backgroundColor: 'background.default'
    }
    const variantFinnalWriting = {
        initial: {
            x: '-50%'
        },
        animate: {
            opacity: [0, 1, 1, 1, 1,],
            x: [null, '120%'],
        },
        transition: {
            type: 'tween',
            ease: 'linear',
            delay: 8.5,
            duration: 3
        },
    };
    return (
        <Box component={m.div} sx={{ ...propsContainer }} {...variant}>
            <Box component={m.div} sx={{ ...propsBox }}>
                <Box component={m.div} {...variantBoxHoriz} sx={{ ...propsBoxHoriz }}  >
                    <Box sx={{ ...propsBoxHorizOrange }} className="OrangeBox" />
                </Box>
                <Box
                    sx={{ ...propsBoxVert }}
                    component={m.div}
                    {...variantBoxVert}
                />
                <Box sx={{ ...propsTitle }} component={m.div} {...variantTitle}>
                    <Typography variant="body1" component="span" sx={{ color: 'text.secondary' }}>
                        {`Wilkommen bei `}
                    </Typography>
                    <Typography variant="body1" component="span" sx={{ color: 'dima' }}>
                        Dima & Partner AG
                    </Typography>
                    <Typography variant="body1" component="span" sx={{ color: 'text.secondary' }}>
                        , ihre Architektur- & Totalunternehmung in Glarus Zürich
                    </Typography>
                </Box>
                <Box component={m.div} sx={{ ...propsWriting }} {...variantWriting} >
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
                        Wir bauen erfahren
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
                        und kompetent auf
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
                        ihrem Fundament
                    </Typography>
                </Box>
                <Box component={m.div} sx={{ ...propsTitle2 }} {...variantTitle2}  >
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
                        WIR ENTWICKELN. WIR PLANEN. WIR REALISIEREN.
                    </Typography>
                </Box>
                <Box component={m.div} sx={{ ...propsFinalWriting }}  {...variantFinnalWriting} >
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
                        Wir entwickeln, planen und realisieren visionen und
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
                        Projekte für Kunden aus verschidensten Bereichen
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }} >
                        mit unterschiedlichsten Anforderungen.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )


}
