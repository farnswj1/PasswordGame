import { FC } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useColorMode } from 'hooks';
import Logo from 'assets/images/logo.png';

const Header: FC = () => {
  const { palette } = useTheme();
  const setColorMode = useColorMode();

  const handleColorMode = () => setColorMode(palette.mode === 'light' ? 'dark' : 'light');
  const isDarkMode = palette.mode === 'dark';

  return (
    <Box component="header">
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              marginRight="auto"
              sx={{ userSelect: 'none' }}
            >
              <Box
                component="img"
                src={Logo}
                maxWidth={32}
                maxHeight="auto"
              />
              <Typography variant="h6">
                Password Game
              </Typography>
            </Stack>
            <Tooltip
              title={`Enable ${isDarkMode ? 'light' : 'dark'} mode.`}
              arrow
            >
              <IconButton color="inherit" onClick={handleColorMode}>
                {isDarkMode ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
