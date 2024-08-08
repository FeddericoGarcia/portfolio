import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import LandingPage from './pages/LandingPage'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
  const [userPreference, setUserPreference] = React.useState(false);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    setUserPreference(true)
  };
  
  const currentMode = userPreference ? mode : (prefersDarkMode ? 'dark' : 'light')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentMode,
          primary: {
            light: '#f6f6f6',
            main: '#0099ff',
            dark: '#002884',
            contrastText: '#f1f7ff',
            background: "#121212"
          },
          secondary: {
            light: '#ff7961',
            main: '#0099ff',
            dark: '#ba000d',
            contrastText: '#000',
            background: "#efefef"
          },
        },
      }),
    [currentMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage mode={mode} toggleColorMode={toggleColorMode}/>
    </ThemeProvider>
  );
}
