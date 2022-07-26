import { ReactNode } from 'react';
// components

import FullScreenLayout from './FullScreenLayout';
import MainLayout from './MainLayout';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'fullScreen';

};

export default function Layout({ variant = 'main', children, }: Props) {
  if (variant === 'fullScreen') {
    return <FullScreenLayout> {children} </FullScreenLayout>;
  }

  return <MainLayout> {children} </MainLayout>;
}