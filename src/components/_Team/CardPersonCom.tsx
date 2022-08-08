import React from "react";
// @mui
import { Grid, Stack, Typography, Card, CardMedia, } from '@mui/material';
import { Person } from 'src/utils/TS/interface';
// hooks
import useResponsive from '../../hooks/useResponsive';
import { Mail } from "../_Reusable/Mail";



export function CardPersonCom({ person }: { person: Person }) {
    //const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
    //const [openAlert, setOpenAlert] = useState(false);
    /*
    const handleOpen = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget);
    };
    */
    /*
     const handleClose = () => {
         setAnchorEl(null);
     };
     */
    /*
     const copyText = (text: string) => {
         navigator.clipboard.writeText(text);
         setOpenAlert(true);
         setTimeout(() => setOpenAlert(false), 1000);
         clearTimeout();
     }
 */
    //const open = Boolean(anchorEl);
    const isDesktop = useResponsive('up', 'lg');
    const isSmall = useResponsive('down', 'sm');
    const { photo, name, surname, title1, title2, job1, job2, job3, email } = person;

    //const { query } = useRouter();

    return (

        <Card >
            <CardMedia
                component="img"
                height={isDesktop ? 545 : 'auto'}
                image={photo.url}
                alt={`${name} ${surname} ${job1}`}
            />
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={isSmall ? { p: 1.75, height: '130px' } : { px: 3.25, pt: 4.15, pb: 4, height: '195px' }}
            >
                <Grid item>
                    <Typography
                        variant="body2"
                        component="h2"
                        sx={{ color: 'dima' }}
                    >
                        {`${name.toUpperCase()} ${surname.toUpperCase()}`}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ pt: '2px' }} >{title1}</Typography>
                    <Typography variant="body2" component="p" sx={{ pt: '2px' }} >{title2}</Typography>
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                    ><div>
                            <Typography variant="body2" component="p" sx={{ mr: '15px' }}>{job1}</Typography>
                            <Typography variant="body2" component="p" sx={{}}>{job2}</Typography>
                            <Typography variant="body2" component="p" sx={{}}>{job3}</Typography>
                        </div>

                        {(email !== '') && <Mail email={email} />}

                    </Stack>
                </Grid>
            </Grid>

        </Card >


    )
}
