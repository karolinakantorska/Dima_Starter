import { ReactNode } from 'react';
// @mui
import { Box, Stack } from '@mui/material';
// components
import MainHeader from './MainHeader';


type Props = {
  children?: ReactNode;
};

export default function FullScreenLayout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      {children}
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}
