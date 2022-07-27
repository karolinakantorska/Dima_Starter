
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import { Card, CardContent, Stack, Typography } from "@mui/material";
import parse from 'html-react-parser';

import { Mail } from "src/components/_Reusable/Mail";
import { Job } from "src/utils/TS/interface";


// TODO use location instead use route
export function JobCom({ job }: { job: Job }) {
  const {
    announcment,
    start,
    dedline,
    location,
    title,
    procentMin,
    procent,
    description,
    kontaktperson,
    email, } = job;
  return (
    <Card >
      <CardContent>
        <Stack
          direction="column"
          spacing={8}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
          >
            <Typography
              variant="body2"
              component="div"
            >
              {`${announcment.toDateString()}`}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            component="p"
          >
            {` Unsere Team in ${location} sucht ab ${start.toDateString()}:`}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: 'dima' }}
          >
            {`${title.toUpperCase()} ${procentMin && procentMin.toString().toUpperCase()} - ${procent.toString().toUpperCase()}%`}
          </Typography>

          <Typography
            variant="body1"
            component="div"
          >
            {parse(description)}
          </Typography>
          <Typography
            variant="body1"
            component="div"
          >
            {`Haben wir Ihre Interesse geweckt?`}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ color: 'dima' }}
          >

            {`Wir warten auf Ihre unterlagen bis ${dedline.toDateString()}`}
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={8}
          >
            <Typography
              variant="body1"
              component="p"
            >
              {`Kontaktperson: ${kontaktperson}`}
            </Typography>
            <Mail email={email} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
