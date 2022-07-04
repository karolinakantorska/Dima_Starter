import { ReactNode } from 'react';
// components

import LogoOnlyLayout from './LogoOnlyLayout';
import MainLayout from './MainLayout';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'wholeScreen';
};

export default function Layout({ variant = 'main', children }: Props) {
  if (variant === 'wholeScreen') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  return <MainLayout> {children} </MainLayout>;
}