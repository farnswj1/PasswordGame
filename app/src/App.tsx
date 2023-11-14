import { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Box,
  createTheme,
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
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

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
        <BrowserRouter>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            bgcolor="background.default"
            color="text.primary"
          >
            <Header />
            <Box
              component="main"
              role="main"
              bgcolor="inherit"
              color="inherit"
              paddingY={5}
              marginBottom="auto"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </PaletteModeContext.Provider>
  );
};

export default App;
