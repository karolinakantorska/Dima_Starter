import useResponsive from '../../hooks/useResponsive';
import { m } from 'framer-motion';
import Glarus from '/public/location/Glarus.jpg';
import Zurich from '/public/location/Zurich.jpg';
import { Card, CardMedia, Stack, Typography, Box, Skeleton } from '@mui/material';
import { dimaContact, layoutHeader } from 'src/utils/dima';
import { firstLettersBig } from '../../utils/Text/textUtils';

import { SiteTitle } from '../_Reusable/SiteTitle';
import Link from 'next/link';
import { TitleTextCom } from '../_Reusable/TitleTextCom';
import { BodyTextCom } from '../_Reusable/BodyTextCom';
import Image from 'next/image';

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
        <TitleTextCom text={town.toUpperCase()} />
        <BodyTextCom text={`${firstLettersBig(street)} ${numer}`} sx={{ pt: .9 }} />
        <BodyTextCom text={`CH-${post} ${firstLettersBig(town)}`} />
        <BodyTextCom text={`T ${phone}`} />
        <Typography variant="body1" component="p" sx={{ color: 'text.secondary' }}>
          {email.substring(0, 3)}<span style={{ display: "none" }}>sth@num</span>{email.substring(3, 9)}<span style={{ display: "none" }}>num.ch</span>{email.substring(9)}
        </Typography>
      </Box>
    )
  }
    ;
  const ImageCard = ({ href, link }: { href: string, link: string }) => (
    <Link href={href} passHref>
      <Card sx={{ maxHeight: '279px' }} >
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
        <Image src={link} width='500px' height='279px' alt='Lageplan in Glarus' />
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
          <Image src={Zurich.src} width='500px' height='279px' alt='Lageplan in Zurich' />
          <TextBox text={dimaContact.zurich} />
        </Stack>
      </Stack>
    </>
  )
}

