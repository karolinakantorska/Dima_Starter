
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import { Card, CardContent, Stack, Typography } from "@mui/material";
import parse from 'html-react-parser';

import { Mail } from "src/components/_Reusable/Mail";
import { Job } from "src/utils/TS/interface";


// TODO use location instead use route
export function JobCom({ job }: { job: Job }) {
  const {
    id,
    announcment,
    location,
    title,
    procentMin,
    procent,
    descriptionJob,
    descWe,
    tasks,
    skils,
    kontaktperson,
    tel,
    email, } = job;
  return (
    <Card >

    </Card>
  )
}
