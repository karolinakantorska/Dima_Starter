import React, { Dispatch, SetStateAction, useState } from "react";
// @mui
import { Grid, Card, CardContent, CardActionArea, } from '@mui/material';
import { Job, } from 'src/utils/TS/interface';

// hooks
import useResponsive from '../../hooks/useResponsive';


//import { useRouter } from "next/router";
import { PATH_JOBS } from '../../routes/paths';
import Link from "next/link";
import { BodyTextCom } from "../_Reusable/BodyTextCom";
import { TitleTextCom } from "../_Reusable/TitleTextCom";
import useAuth from "src/utils/firebaseAuth/useAuth";
import { EditDeleteIconCom } from "../_Reusable/EditDeleteIconCom";
import { DeleteDialogCom } from "../_Reusable/DeleteDialogCom";
import { deleteProjectFromFirestore } from "src/utils/apis/deleteFromFirestore";
import { revalidateURL } from "src/utils/myUtils/revalidateURL";
import { workProcent } from "src/utils/myUtils/workProcent";

export function CardJobCom({
    job,
    setSucces,
    setLoading,
    setError,
}: {
    job: Job,
    setSucces: Dispatch<SetStateAction<string | boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<{
        code: string;
        message: string;
    } | null>>;
}) {
    const {
        id,
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
    const { isAuthenticated } = useAuth();
    const [open, setOpen] = useState(false);
    function handleOpen(e: { stopPropagation: () => void; }) {
        console.log(e)
        e.stopPropagation();
        setOpen(true);
    };
    function handleClose() {
        setOpen(false);
    };
    function handleDelete() {
        setLoading(true);
        deleteProjectFromFirestore('jobs', id)
            .then(() => {
                fetch(revalidateURL(PATH_JOBS.jobs)).then(() => {
                    setLoading(false);
                    setSucces(true);
                })
            })
            .catch((error) => {
                console.log('error', error);
                setError(error);
                setLoading(false);
            });
        setOpen(false);
    };
    return (
        <>
            <Card sx={{ height: 280 }}>
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
                                    <BodyTextCom text={`${new Date(announcment).toLocaleString('de-DE', { dateStyle: "long" })}`} />

                                    <BodyTextCom text={`Unsere Team in ${location} sucht:`} />
                                </Grid>
                                <Grid item>
                                    <TitleTextCom text={`${title.toUpperCase()} ${workProcent(procentMin, procent)}`} sx={{ pt: 0.75 }} />
                                </Grid>
                                <Grid item>
                                    <BodyTextCom text={`ZUM STELLENBESCHRIEB`} />
                                </Grid>
                            </Grid>

                        </CardContent>

                    </CardActionArea>
                </Link>
                {isAuthenticated && <Grid container justifyContent="flex-end" sx={{ mt: '-40px', }} >
                    <EditDeleteIconCom handleOpen={handleOpen} editURL={`${PATH_JOBS.editJob}/${id}`} />
                </Grid>}
            </Card>
            {isAuthenticated && <DeleteDialogCom
                open={open}
                handleClose={handleClose}
                handleDelete={handleDelete}
                objectToBeDeled="Mitarbeiter"
                titleOfObjectToBeDeled={`${title.toUpperCase()}}`}
            />
            }
        </>
    )
}
