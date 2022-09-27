import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { MotionContainer, varBounce } from '../components/animate';
// assets
import { PageNotFoundIllustration } from '../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------
/*
Page404.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="fullScreen">{page}</Layout>;
};
*/
// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Layout variant="fullScreen">
      <Page title="404 Page Not Found">
        <Container component={MotionContainer}>
          <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                Entschuldigung, Seite nicht gefunden!
              </Typography>
            </m.div>

            <m.div variants={varBounce().in}>
              <Typography sx={{ color: 'text.secondary' }}>
                Entschuldigung, wir konnten die gesuchte Seite nicht finden. Vielleicht haben Sie sich bei der URL vertippt?
                Überprüfen Sie unbedingt Ihre Rechtschreibung.
              </Typography>
            </m.div>

            <NextLink href="/" passHref>
              <Button size="large" variant="contained" sx={{ mt: 6 }}>
                Zur Startseite
              </Button>
            </NextLink>
          </ContentStyle>
        </Container>
      </Page>
    </Layout>
  );
}
