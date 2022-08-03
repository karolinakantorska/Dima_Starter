import useResponsive from '../../hooks/useResponsive';
import { m } from 'framer-motion';
import Glarus from '/public/location/Glarus.jpg';
import Zurich from '/public/location/Zurich.jpg';
import { Card, CardMedia, Stack, Typography, Box, CardActionArea } from '@mui/material';
import { dimaContact, layoutHeader } from 'src/utils/dima';
import { firstLettersBig } from '../../utils/Text/textUtils';

import { SiteTitle } from '../_Reusable/SiteTitle';
import Link from 'next/link';
import Image from '../Image';

//console.log('Glarus:', Glarus)
// TODO use location instead use route
export function ContactCom() {
  //const initialInputs = { param: "Alle" }

  //const isDesktop = useResponsive('up', 'lm');
  const isMiddle = useResponsive('down', 'md');
  const isSmall = useResponsive('down', 'sm');

  const pl = isSmall ? 0 : isMiddle ? 4 : 5.5;
  const py = isMiddle ? 0 : 2;
  const pb = isSmall ? 4 : py;
  //const { query } = useRouter();
  const TextBox = ({ text }: any) => {
    const { phone,
      town,
      street,
      numer,
      post,
      email, } = text;
    return (
      <Box
        sx={{ pl: pl, py: py, pb: pb, minWidth: '300px' }}
      >
        <Typography variant="body2" component="h2" sx={{ color: 'dima' }}        >
          {town.toUpperCase()}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: 'text.secondary', pt: .9 }}        >
          {`${firstLettersBig(street)} ${numer}`}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}        >
          {`CH-${post} ${firstLettersBig(town)}`}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}        >
          {`T ${phone}`}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
          {email.substring(0, 3)}<span style={{ display: "none" }}>sth@num</span>{email.substring(3, 9)}<span style={{ display: "none" }}>num.ch</span>{email.substring(9)}
        </Typography>
      </Box>
    )
  }
    ;
  const ImageCard = ({ href, link }: { href: string, link: string }) => (
    <Link href={href} passHref>
      <Card sx={{
        maxWidth: 500,
      }}>
        <Box
          component={m.div}
          key="animated children"
          sx={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            background: 'transparent',
            zIndex: 2000,
            transition: '.5s',
            boxShadow: 'inset 0px 0px rgba(255,255,255,0.2)',

          }}
          whileHover={{
            boxShadow: 'inset 0px -600px rgba(255,255,255,0.2)',
          }}
        />
        <CardMedia
          component="img"
          image={link}
        />
      </Card >
    </Link>
  )
  return (
    <>
      <SiteTitle text={layoutHeader.contact} />
      <Stack spacing={8} sx={{ mt: 8, }}>
        <Stack
          direction={isSmall ? 'column-reverse' : 'row'}
        >
          < ImageCard href="https://goo.gl/maps/1bqKPqRwh7MAjys17" link={Glarus.src} />
          <TextBox text={dimaContact.glarus} />
        </Stack>
        <Stack
          direction={isSmall ? 'column-reverse' : 'row'}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              image={Zurich.src}
            />
          </Card >
          <TextBox text={dimaContact.zurich} />
        </Stack>
      </Stack>

    </>
  )
}

