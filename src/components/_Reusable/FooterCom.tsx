import { Container, Stack, Typography } from "@mui/material";

import { BodyTextCom } from "./BodyTextCom";
import { TitleTextCom } from "./TitleTextCom";

// ----------------------------------------------------------------------

export default function FooterCom() {

    return (

        <Stack spacing={6} sx={{ minHeight: '350px', pt: 18, pb: 16 }}  >
            <BodyTextCom text="Impressum" />
            <div >
                <Stack spacing={2}>
                    <TitleTextCom text="Gesamtverantwortung, Redaktion und Produktion" />
                    <Stack spacing={1} >
                        <BodyTextCom text="DIMA & Partner AG" />
                        <BodyTextCom text="Gewerbezentrum, Holenstein 19" />
                        <BodyTextCom text="8750 Glarus" />
                    </Stack>
                </Stack>
            </div>
            <div >
                <Stack spacing={2}>
                    <TitleTextCom text="Design" />
                    <Stack spacing={1} >
                        <BodyTextCom text="ama group switzerland ltd" />
                        <BodyTextCom text="Hornerguet 2" />
                        <BodyTextCom text="8754 Netstal" />
                    </Stack>
                </Stack>
            </div>
            <div >
                <Stack spacing={2}>
                    <TitleTextCom text="Website" />
                    <Stack spacing={1} >
                        <Typography
                            component="a"
                            variant="body2"
                            href="https://karolinakantorska.ch/"
                            sx={{
                                color: 'text.primary',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            https://karolinakantorska.ch
                        </Typography>


                    </Stack>
                </Stack>
            </div>

        </Stack>


    );
}