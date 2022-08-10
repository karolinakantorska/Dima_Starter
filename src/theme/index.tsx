import { useMemo, ReactNode } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// hooks

//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 0 },
      direction: "ltr",
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    }),
    [false]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
