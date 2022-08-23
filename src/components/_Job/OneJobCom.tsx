
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import React, { useEffect, useState } from 'react';
import { Card, List, ListItem, Link, Grid, ButtonBase } from "@mui/material";

import { Job } from "src/utils/TS/interface";
import { BodyTextCom } from "../_Reusable/BodyTextCom";
import { TitleTextCom } from "../_Reusable/TitleTextCom";
import useResponsive from 'src/hooks/useResponsive';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useRouter } from 'next/router';

// TODO use location instead use route
export function OneJobCom({ job }: { job: Job }) {
  const [copied, setCopied] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copied]);

  const {
    announcment,
    location,
    title,
    procentMin,
    procent,
    descriptionJob,
    descWe,
    tasks,
    skills,
    kontaktperson,
    //phone,
    email, } = job;
  const handleClick = () => {
    push(`mailto:${email}`)
    navigator.clipboard.writeText(email);
    setCopied(true);
  };
  const isSmall = useResponsive('down', 'sm');
  const padding = {
    px: 4,
    pt: 4.75,
    pb: 4.25
  }
  const propsCard = {
    ...padding,
    height: '100%',
    minHeight: '280px'

  }
  const propsButton = {
    mt: '19px',
    height: 109,
    width: '100%',
    border: '4px solid rgb(239, 123, 16)',
    transition: '0.3s',

    '&:hover': {
      boxShadow: `inset 0px -150px rgba(239, 123, 16,.1)`,
      textDecoration: 'none'
    },
    '&:focus': {
      boxShadow: `inset 0px -150px rgba(239, 123, 16, .1)`,
      textDecoration: 'none'
    },
    '&:visited': {
      boxShadow: `inset 0px 0px rgba(239, 123, 16, .5)`,
    },
  }
  const propsDesc = {
    pl: isSmall ? 0 : 4
  }
  const Listed = ({ textArray }: { textArray: string[] }) => (
    <List sx={{ pt: '4px' }}>
      {textArray.map((text, i) => (
        <ListItem key={i} sx={{ pl: 0, py: '6px' }}>
          <FiberManualRecordIcon sx={{ fontSize: 18, color: 'dima', mr: 1.4 }} />
          <BodyTextCom text={text} />
        </ListItem>
      ))}
    </List>
  )
  return (
    <Grid container direction='row' rowSpacing={2.25} columnSpacing={1.5}>
      <Grid item xs={12} sm={12} md={8}  >
        <Card sx={{ ...propsCard }}>
          <Grid container direction="row" columnSpacing={1.5} rowSpacing={1.25}>
            <Grid item xs={12} sm={6} md={6}>
              <TitleTextCom
                text={`${title.toUpperCase()} ${(procentMin !== 'keins') ? procentMin.toString().toUpperCase() : ''} - ${procent.toString().toUpperCase()}%`}
              />
              <BodyTextCom text={location} sx={{ pt: 1.25 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {descriptionJob.map((text, i) => <BodyTextCom key={i} text={text} sx={{ ...propsDesc }} />)}
              <BodyTextCom text={`Veröffentlicht am: ${new Date(announcment).toLocaleString('de-DE', { dateStyle: "long" })}`} sx={{ ...propsDesc }} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}  >
        <Card sx={{ ...propsCard }}>
          <TitleTextCom text="WAS SIE MITBRINGEN" />
          <Listed textArray={skills} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}  >
        <Card sx={{ ...propsCard }}>
          <TitleTextCom text="AUGABEN" />
          <Listed textArray={tasks} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}  >
        <Card sx={{ ...propsCard }}>
          <TitleTextCom text="WAS WIR BIETEN" />
          {descWe.map((text, i) => <BodyTextCom key={i} text={text} sx={{ pt: 1.25 }} />)}
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}  >
        <Card sx={{ height: 'calc(100% - 128px)', ...padding }}>
          <TitleTextCom text="HABEN SIE FRAGEN" />
          <BodyTextCom text={`${kontaktperson} - unsere Kontaktperson gibt Ihnen gerne Auskunft.`} sx={{ pt: 1.25 }} />
          {/*<BodyTextCom text={` T: ${tel}`} />*/}
        </Card>

        <ButtonBase disableRipple sx={{ ...propsButton }} onClick={handleClick}>
          <BodyTextCom text={copied ? 'E-MAIL KOPIED' : 'JEZT BEWERBEN'} sx={{ textDecoration: 'none', }} />
        </ButtonBase>

      </Grid>
    </Grid>
  )
}
