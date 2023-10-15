import { FC } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import PasswordForm from './PasswordForm';
import { setTitle } from 'utils';

const Home: FC = () => {
  setTitle();

  return (
    <Container maxWidth="lg">
      <Stack spacing={5} justifyContent="center" alignItems="center">
        <Typography variant="h4" textAlign="center">
          Password Game
        </Typography>
        <PasswordForm />
      </Stack>
    </Container>
  );
};

export default Home;
