import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Stack, Typography } from '@mui/material';
import { setTitle } from 'utils';

const PageNotFound: FC = () => {
  setTitle('Page Not Found');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => navigate('/'), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg">
      <Stack spacing={5} justifyContent="center" alignItems="center">
        <Typography variant="h4" textAlign="center">
          Page Not Found
        </Typography>
        <Stack spacing={3}>
          <Typography variant="body1">
            It appears you are lost. Redirecting...
          </Typography>
          <Button component={Link} variant="contained" to="/">
            Go Home
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PageNotFound;
