import React from "react";
// @mui
import { Grid, Typography, Card, CardContent, CardActionArea, } from '@mui/material';
import { Job, } from 'src/utils/TS/interface';

// hooks
import useResponsive from '../../hooks/useResponsive';


//import { useRouter } from "next/router";
import { PATH_JOBS } from '../../routes/paths';
import Link from "next/link";

export function CardJobCom({ job }: { job: Job }) {
    const { id,
        announcment,
        location,
        title,
        procentMin,
        procent,
    } = job;
    const isMiddle = useResponsive('down', 'lm');
    //const { route } = useRouter();
    const propsCardContent = {
        height: '100%',
        pt: isMiddle ? 4 : 5,
        px: isMiddle ? 3.5 : 5.25,
        pb: isMiddle ? 4.5 : 7.5,
    }

    //console.log('announcment', announcment);
    //console.log('announcment', typeof announcment);
    return (
        <Card sx={{ height: 300 }}>
            <Link href={`${PATH_JOBS.job}/${id}`} passHref >
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{
                        ...propsCardContent
                    }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            sx={{
                                height: '100% '
                            }}
                        >
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    component="div"
                                >
                                    {`${announcment.toLocaleString('de-DE', { dateStyle: "long" })}`}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="p"
                                >
                                    {` Unsere Team in ${location} sucht:`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    sx={{ color: 'dima', pt: 0.75 }}
                                >
                                    {`${title.toUpperCase()} ${procentMin ? procentMin.toString().toUpperCase() : ''} - ${procent.toString().toUpperCase()}%`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    component="p"
                                >
                                    ZUM STELLENBESCHRIEB
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}
