import { FC } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import PasswordForm from './PasswordForm';

const Home: FC = () => (
  <Container maxWidth="lg">
    <Stack spacing={5} justifyContent="center" alignItems="center">
      <Typography variant="h4" textAlign="center">
        Password Game
      </Typography>
      <PasswordForm />
    </Stack>
  </Container>
);

export default Home;
