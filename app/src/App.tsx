import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Box,
  createTheme,
  PaletteMode,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import { teal } from '@mui/material/colors';
import { ColorModeContext } from 'contexts';
import { Home, PageNotFound } from 'pages';
import { Footer, Header } from 'layouts';

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
        <BrowserRouter>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary'
            }}
          >
            <Header />
            <Box component="main" role="main" padding={5} height="100%">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
