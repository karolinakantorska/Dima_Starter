import React, { Dispatch, SetStateAction, useState } from 'react';
// @mui
import { Grid, Stack, Card, CardMedia } from '@mui/material';
import { Person } from 'src/utils/TS/interface';
// hooks
import useResponsive from '../../hooks/useResponsive';
import { Mail } from "../_Reusable/Mail";
import { deleteProjectFromFirestore } from '../../utils/apis/deleteFromFirestore';
import { deleteImage } from 'src/utils/apis/uploadPhoto';
import { PATH_DIMA } from 'src/routes/paths';
import { EditDeleteIconCom } from '../_Reusable/EditDeleteIconCom';
import { DeleteDialogCom } from '../_Reusable/DeleteDialogCom';
import { ChipDisplayOrderCom } from '../_Reusable/ChipDisplayOrderCom';
import { TitleTextCom } from '../_Reusable/TitleTextCom';
import { BodyTextCom } from '../_Reusable/BodyTextCom';
import useAuth from 'src/utils/firebaseAuth/useAuth';

export function CardPersonCom({
    person,
    setSucces,
    setLoading,
    setError,
    revalidate
}: {
    person: Person
    setSucces: Dispatch<SetStateAction<string | boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<{
        code: string;
        message: string;
    } | null>>;
    revalidate: any;
}) {
    const isDesktop = useResponsive('up', 'lg');
    const isSmall = useResponsive('down', 'sm');
    const { isAuthenticated } = useAuth();
    const { id, photo, name, surname, title1, title2, job1, job2, email } = person;
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    };
    function handleClose() {
        setOpen(false);
    };
    function handleDelete() {
        setLoading(true);
        deleteProjectFromFirestore('team', id)
            .then(() => {
                deleteImage(photo.url);
                setLoading(false);
                setSucces(true);
                //revalidate();
            })
            .catch((error) => {
                console.log('error', error);
                setError(error);
                setLoading(false);
            });
        setOpen(false);
    };

    return (
        <Card >
            {isAuthenticated && <Grid container justifyContent="flex-end" sx={{ position: 'absolute' }} >
                <ChipDisplayOrderCom displayOrder={person.displayOrder} />
            </Grid>}
            <CardMedia
                component="img"
                height={isDesktop ? 545 : 'auto'}
                image={photo.url ? photo.url : '/assets/bg_gradient.jpeg'}
                alt={`${name} ${surname} ${job1}`}
                sx={{ height: '574px' }}
            />
            {isAuthenticated && <Grid container justifyContent="flex-end" sx={{ mt: '-40px', }} >
                <EditDeleteIconCom handleOpen={handleOpen} editURL={`${PATH_DIMA.editMitarbeiter}/${id}`} />
            </Grid>}
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={isSmall ? { p: 1.75, height: '130px' } : { px: 3.25, pt: 4.15, pb: 4, height: '195px' }}
            >
                <Grid item>
                    <TitleTextCom text={`${name.toUpperCase()} ${surname.toUpperCase()}`} />
                    <BodyTextCom text={title1} sx={{ pt: '2px' }} />
                    <BodyTextCom text={title2} sx={{ pt: '2px' }} />
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                    ><div>
                            <BodyTextCom text={job1} sx={{ mr: '15px' }} />
                            <BodyTextCom text={job2} sx={{ pt: '2px' }} />
                        </div>
                        {(email !== '') && <Mail email={email} />}
                    </Stack>
                </Grid>
            </Grid>
            {isAuthenticated && <DeleteDialogCom
                open={open}
                handleClose={handleClose}
                handleDelete={handleDelete}
                objectToBeDeled="Mitarbeiter"
                titleOfObjectToBeDeled={`${name.toUpperCase()} ${surname.toUpperCase()}`}
            />}
        </Card >
    )
}
