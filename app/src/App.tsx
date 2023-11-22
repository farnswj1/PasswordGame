import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import { teal } from '@mui/material/colors';
import { PaletteModeContext } from 'contexts';
import { Home, PageNotFound } from 'pages';
import { Footer, Header } from 'layouts';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let initialMode = localStorage.getItem('mode') as PaletteMode | null;

  if (initialMode === null) {
    initialMode = prefersDarkMode ? 'dark' : 'light';
  }

  const [paletteMode, setPaletteMode] = useState<PaletteMode>(initialMode);
  useEffect(() => localStorage.setItem('mode', paletteMode), [paletteMode]);

  const theme = createTheme({
    palette: {
      mode: paletteMode,
      primary: {
        main: teal[500]
      },
      background: {
        default: paletteMode === 'dark' ? '#343434' : '#ffffff'
      }
    }
  });

  return (
    <PaletteModeContext.Provider value={setPaletteMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <Header />
          <Box component="main" paddingY={5} marginBottom="auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </PaletteModeContext.Provider>
  );
};

export default App;
