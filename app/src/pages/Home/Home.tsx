import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import PasswordForm from './PasswordForm';

const Home: FC = () => (
  <Stack spacing={5} justifyContent="center" alignItems="center">
    <Typography variant="h4" textAlign="center">
      Password Game
    </Typography>
    <PasswordForm />
  </Stack>
);

export default Home;
