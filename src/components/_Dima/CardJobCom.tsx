import React from "react";
// @mui
import { Grid, Stack, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { Job, } from 'src/utils/TS/interface';

// hooks
import useResponsive from '../../hooks/useResponsive';
import { useRouter } from "next/router";
import { PATH_JOBS } from '../../routes/paths';
import Link from "next/link";



export function CardJobCom({ job }: { job: Job }) {


    const { id,
        announcment,
        dedline,
        location,
        title,
        procentMin,
        procent,
        description,
        kontaktperson,
        email, } = job;

    const { route } = useRouter();

    return (

        <Card
            sx={{ height: 300 }}
        >
            <Link href={`${PATH_JOBS.job}/${id}`}  >
                <CardActionArea
                    sx={{ height: '100%' }}
                >
                    <CardContent sx={{ height: '100%', pt: 2.9, pr: 3, pb: 3.15, pl: 4 }}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                        >
                            <Typography
                                variant="body2"
                                component="div"
                            >
                                {`${announcment.toDateString()}`}
                            </Typography>
                        </Stack>
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            sx={{ pt: 3.25, height: 230 }}
                        >
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    component="p"
                                >
                                    {` Unsere Team in ${location} sucht:`}
                                </Typography>
                                <Typography
                                    variant="h5"
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
                                    Zum Stelenbeschrieb
                                </Typography>
                            </Grid>


                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}
