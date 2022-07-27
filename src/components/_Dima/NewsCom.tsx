//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Stack, Typography } from "@mui/material";
import parse from 'html-react-parser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { News } from "src/utils/TS/interface";

// TODO use location instead use route
export function NewsCom({ news, dark }: { news: News, dark: boolean }) {
  const {
    //id,
    //photos,
    //video,
    date,
    title,
    description,
    //link, 
  } = news;
  const backgroundColor = dark ? 'background.between' : 'background.paper';
  const pt = 3.8;
  const py = 4;
  const pb = 2.5;
  return (
    <Card sx={{
      backgroundColor: backgroundColor
      , height: '212px'
    }}>
      <CardContent sx={{
        height: '100%',
        pt: pt,
        px: py,
        pb: pb,
      }}>
        <Stack
          direction="column"
          spacing={3.8}
          //justifyContent="space-between"
          sx={{ height: '100%' }}
        >
          <Typography
            variant="body2"
            component="div"
          >
            {`${date.toLocaleString('de-DE', { dateStyle: "long" })}`}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: 'dima' }}
          >
            {`${title.toUpperCase()}`}
          </Typography>

          {description && <Accordion
            disableGutters={true}
            sx={dark ? { backgroundColor: 'background.between' } : { backgroundColor: 'background.paper' }}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="expand mehr lesen "
              sx={{ p: 0, }}
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
      </CardContent>

    </Card>
  )
}
