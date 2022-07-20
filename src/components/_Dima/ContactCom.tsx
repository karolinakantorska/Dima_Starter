import useResponsive from '../../hooks/useResponsive';
import Glarus from '/public/location/Glarus.jpg';
import Zurich from '/public/location/Zurich.jpg';
import { Card, CardMedia, Stack, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import { dimaContact } from 'src/utils/dima';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { layoutHeader } from 'src/utils/dima';
import { SiteTitle } from '../_Reusable/SiteTitle';

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

  return (
    <>
      <SiteTitle text={layoutHeader.contact} />
      <Stack spacing={8} sx={{ mt: 8, pb: 5 }}>
        <Stack
          direction={isSmall ? 'column-reverse' : 'row'}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              image={Glarus.src}
            />
          </Card >
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
