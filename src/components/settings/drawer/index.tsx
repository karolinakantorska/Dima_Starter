import { m } from 'framer-motion';

// @mui
import { alpha, styled } from '@mui/material/styles';

// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { NAVBAR, } from '../../../config';


// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  ...cssStyles(theme).bgBlur({ color: theme.palette.background.paper, opacity: 0.92 }),
}));

// ----------------------------------------------------------------------

export default function SettingsDrawer() {
  return (
    <>
      <p>Hallo</p>
    </>
  );
}
