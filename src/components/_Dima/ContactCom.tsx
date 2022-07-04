import useResponsive from '../../hooks/useResponsive';
import Glarus from '/public/location/Glarus.jpg';
import { Card, CardMedia, Stack, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import { dimaContact } from 'src/utils/dima';
import { firstLettersBig } from '../../utils/Text/textUtils';

console.log('Glarus:', Glarus)
// TODO use location instead use route
export function ContactCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();
  const TextBox = ({ text }: any) => {
    const { phone,
      town,
      kanton,
      street,
      numer,
      post,
      email, } = text;
    return (<Box sx={{ pl: 5.5 }}>
      <Typography variant="h5" component="h2" sx={{ color: 'dima' }}        >
        {town.toUpperCase()}
      </Typography>
      <Typography variant="body2" component="p" sx={{ color: 'text.secondary', pt: .9 }}        >
        {`${firstLettersBig(street)} ${numer}`}
      </Typography>
      <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}        >
        {`CH-${post} ${firstLettersBig(town)}`}
      </Typography>
      <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}        >
        {`T ${phone}`}
      </Typography>
      <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
        {email.substring(0, 3)}<span style={{ display: "none" }}>sth@num</span>{email.substring(3, 9)}<span style={{ display: "none" }}>num.ch</span>{email.substring(9)}
      </Typography>
    </Box>
    )
  }
  return (
    <Stack spacing={10.8} sx={{ mt: 16 }}>
      <Stack direction='row'>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            image={Glarus.src}
          />
        </Card >
        <TextBox text={dimaContact.glarus} />
      </Stack>
      <Stack direction='row'>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            image={Glarus.src}
          />
        </Card >
        <TextBox text={dimaContact.zurich} />
      </Stack>
    </Stack>
  )
}
