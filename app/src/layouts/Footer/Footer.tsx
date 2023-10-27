import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" bgcolor="inherit" color="inherit">
      <Container maxWidth="lg">
        <Box textAlign="center" paddingY={3}>
          <Typography variant="subtitle1">
            &copy; {year} Justin Farnsworth
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
