import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { CustomThemeProvider } from 'providers';
import { Footer, Header } from 'layouts';
import { Home, PageNotFound } from 'pages';

const App: FC = () => (
  <CustomThemeProvider>
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
  </CustomThemeProvider>
);

export default App;
