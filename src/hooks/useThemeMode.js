import { useState, useMemo } from 'react';
import { useMediaQuery, createTheme } from '@mui/material';

export const useThemeMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const [userPreference, setUserPreference] = useState(false);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    setUserPreference(true);
  };

  const currentMode = userPreference ? mode : (prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentMode,
          primary: {
            light: '#f6f6f6', // BLANCO PERLA
            main: '#0099ff', // AZUL PRINCIPAL
            dark: '#002884', // AZUL OSCURO
            contrastText: '#f1f7ff', //BLANCO GRISACEO
            contrastTextDark: '#121212', //NEGRO FUERTE
          },
        },
      }),
    [currentMode],
  );

  return {
    mode: currentMode,
    toggleColorMode,
    theme,
  };
};
