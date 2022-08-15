import { AnimatePresence, m } from 'framer-motion';
import { useState, useEffect } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Stack, Divider, Backdrop, Typography, IconButton } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { NAVBAR, defaultSettings } from '../../../config';
//
import Iconify from '../../Iconify';
import Scrollbar from '../../Scrollbar';
import { varFade } from '../../animate';
//
import ToggleButton from './ToggleButton';
import SettingMode from './SettingMode';
import SettingLayout from './SettingLayout';
import SettingStretch from './SettingStretch';
import SettingContrast from './SettingContrast';
import SettingDirection from './SettingDirection';
import SettingFullscreen from './SettingFullscreen';
import SettingColorPresets from './SettingColorPresets';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  ...cssStyles(theme).bgBlur({ color: theme.palette.background.paper, opacity: 0.92 }),
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  width: NAVBAR.BASE_WIDTH,
  flexDirection: 'column',
  margin: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
    0.16
  )}`,
}));

// ----------------------------------------------------------------------

export default function SettingsDrawer() {










  return (
    <>
      <p>Hallo</p>
    </>
  );
}
