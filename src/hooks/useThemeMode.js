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

  return {
    mode: currentMode,
    toggleColorMode,
    theme,
  };
};
