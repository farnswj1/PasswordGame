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
import { usePaletteMode } from 'hooks';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import Logo from 'assets/images/logo.png';

const Header: FC = () => {
  const { palette } = useTheme();
  const setPaletteMode = usePaletteMode();

  const handlePaletteMode = () => setPaletteMode(palette.mode === 'light' ? 'dark' : 'light');
  const isDarkMode = palette.mode === 'dark';

  return (
    <AppBar
      component="header"
      position="static"
      enableColorOnDark
    >
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
            <IconButton color="inherit" onClick={handlePaletteMode}>
              {isDarkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
