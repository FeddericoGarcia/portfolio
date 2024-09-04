import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import LandingPage from './pages/LandingPage';
import { useThemeMode } from './hooks/useThemeMode';

export default function App() {
  const { theme, mode, toggleColorMode } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage mode={mode} toggleColorMode={toggleColorMode}/>
    </ThemeProvider>
  );
}
