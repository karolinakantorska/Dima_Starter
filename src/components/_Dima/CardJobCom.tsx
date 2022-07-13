import React from "react";
// @mui
import { Grid, Stack, Typography, Card, CardContent, CardActionArea, Box } from '@mui/material';
import { Job, } from 'src/utils/TS/interface';

// hooks
import useResponsive from '../../hooks/useResponsive';


import { useRouter } from "next/router";
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
    const { route } = useRouter();
    const pt = isMiddle ? 2.5 : 5;
    const px = isMiddle ? 2 : 5.25;
    const pb = isMiddle ? 2.5 : 7.5;
    return (
        <Card sx={{ height: 300 }}>
            <Link href={`${PATH_JOBS.job}/${id}`}  >
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{
                        height: '100%',
                        pt: pt,
                        px: px,
                        pb: pb,
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
