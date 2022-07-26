import { Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function FooterCom({ photoAuthor }: { photoAuthor: string | undefined }) {

    return (
        <Stack spacing={1} sx={{ minHeight: '350px', pt: 18 }}  >
            <Typography
                variant="body2"
                component="p"
                color="text.primary"
            >
                Impressum
            </Typography>

            {photoAuthor && <Typography
                variant="body2"
                component="span"
                color="text.secondary"
            >
                Photography: {`${photoAuthor}`}
            </Typography>}
        </Stack>
    );
}