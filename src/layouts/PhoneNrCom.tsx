import { Grid, Stack, Typography } from "@mui/material";
import { dimaContact } from "src/utils/dima";

import useResponsive from 'src/hooks/useResponsive';
// ----------------------------------------------------------------------

const Adress = ({ text }: any) => {
    const { town, phone } = text;

    const isMiddle = useResponsive('down', 'md');
    const textProps = {
        //pt: .87,
        //pl: isMiddle ? 2 : 3,
    }
    return (
        <Grid
            container direction='row'
            justifyContent="space-between"
        >
            <Typography
                variant="body2"
                component="span"
                color=" text.secondary"
                sx={{ ...textProps }}
            >
                {`${town}: ${phone}`}
            </Typography>
        </Grid>)
}
export default function PhoneNrCom() {

    return (
        <Stack spacing={1} sx={{ maxWidth: '280px' }}  >
            <Adress text={dimaContact.glarus} />
            <Adress text={dimaContact.zurich} />
        </Stack>
    );
}