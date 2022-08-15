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


// ----------------------------------------------------------------------

export default function SettingsDrawer() {
  return (
    <>
    </>
  );
}
