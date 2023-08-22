import { FC } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useColorMode } from 'hooks';

const Header: FC = () => {
  const { palette } = useTheme();
  const setColorMode = useColorMode();

  const handleColorMode = () => setColorMode(palette.mode === 'light' ? 'dark' : 'light');
  const isDarkMode = palette.mode === 'dark';

  return (
    <Box component="header">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" marginRight="auto" sx={{ userSelect: 'none' }}>
              Password Game
            </Typography>
            <Tooltip
              title={`Enable ${isDarkMode ? 'light' : 'dark'} mode.`}
              arrow
            >
              <IconButton color="inherit" onClick={handleColorMode}>
                {isDarkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
