import { _mockProjekts } from '../../_mock/referenzen/referenzen';
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Stack, Typography } from "@mui/material";
import parse from 'html-react-parser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { News } from "src/utils/TS/interface";

// TODO use location instead use route
export function NewsCom({ news, dark }: { news: News, dark: boolean }) {
  const { id,
    photos,
    video,
    date,
    title,
    description,
    link, } = news;

  return (
    <Card sx={dark ? { backgroundColor: 'background.between' } : { backgroundColor: 'background.paper' }}>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        sx={{ height: '100%' }}
      ><CardContent>
          <Typography
            variant="body2"
            component="div"
          >
            {`${date.toDateString()}`}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: 'dima' }}
          >
            {`${title.toUpperCase()}`}
          </Typography>

        </CardContent>
        {description && <Accordion
          disableGutters={true}
          sx={dark ? { backgroundColor: 'background.between' } : { backgroundColor: 'background.paper' }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="expand mehr lesen "
            sx={{ pl: 3, pr: 3, pb: 0 }}
          >
            <Typography
              variant="body2"
              component="p"
            >
              MEHR LESEN
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pl: 3, pr: 3, }}>
            <Typography variant="body1"
              component="p">
              {parse(description)}
            </Typography>
          </AccordionDetails>
        </Accordion>}
      </Stack>
    </Card>
  )
}
