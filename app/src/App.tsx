import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Box, createTheme, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { teal } from '@mui/material/colors';
import { ColorModeContext } from 'contexts';
import { Home } from 'pages';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: colorMode,
        primary: {
          main: teal[500]
        },
        background: {
          default: colorMode === 'dark' ? '#343434' : '#ffffff',
          paper: teal[500]
        }
      }
    }),
    [colorMode]
  );

  return (
    <ColorModeContext.Provider value={setColorMode}>
      <ThemeProvider theme={theme}>
        <Box
        display="flex"
        flexDirection="column"
        height="100%"
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary'
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
