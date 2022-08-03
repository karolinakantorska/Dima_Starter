import { Container, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function FooterCom() {

    return (
        <Container>
            <Stack spacing={1} sx={{ minHeight: '350px', pt: 18 }}  >
                <Typography
                    variant="body2"
                    component="p"
                    color="text.primary"
                >
                    Impressum
                </Typography>
            </Stack>
        </Container>

    );
}