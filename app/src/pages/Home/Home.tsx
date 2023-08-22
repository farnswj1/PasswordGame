import { FC, Fragment } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Footer, Header } from 'layouts';
import PasswordForm from './PasswordForm';

const Home: FC = () => (
  <Fragment>
    <Header />
    <Box component="main" role="main" padding={5}>
      <Stack spacing={5} justifyContent="center" alignItems="center">
        <Typography variant="h4" textAlign="center">
          Password Game
        </Typography>
        <PasswordForm />
      </Stack>
    </Box>
    <Footer />
  </Fragment>
);

export default Home;
