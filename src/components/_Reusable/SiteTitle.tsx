import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useResponsive from '../../hooks/useResponsive';
interface LayoutHeader { text: { title: string, untertitle: string, description: string } };

export const SiteTitle = ({ text }: LayoutHeader) => {

    const isSmall = useResponsive('down', 'sm');
    const isMiddle = useResponsive('up', 'sm');
    const isDesktop = useResponsive('up', 'lm');
    const { title, untertitle, description } = text;
    const gtc = isSmall ? '1fr' : '56fr 43fr'
    return (
        <Box
            display="grid"
            gridTemplateColumns={gtc}
        >
            <Box>
                {isMiddle && <Typography variant="h3" component="h1" sx={{ color: 'dima' }}>
                    {title.toUpperCase()}
                </Typography>}
                <Typography variant="h4" component="h2" sx={{ color: 'text.primary', mt: 0 }}>
                    {untertitle}
                </Typography>
            </Box>
            {isDesktop && <Box display="grid"
                gridTemplateColumns='6px 1fr'
                columnGap="24px"
            >
                <Box sx={{ backgroundColor: 'dima' }} />
                <Typography
                    variant="body1"
                    component="p"
                    maxHeight='490px'
                    //align='justify' 
                    sx={{ color: 'text.primary' }} >
                    {description}
                </Typography>
            </Box>}
        </Box >
    )
}