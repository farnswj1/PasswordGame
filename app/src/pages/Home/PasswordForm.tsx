import { FC, FormEvent, useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Fade,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { validate } from 'libs';

const PasswordForm: FC = () => {
  const [password, setPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const error = useMemo(() => validate(password), [password]);
  const passwordLength = password.length;
  const isEmpty = (password === '');
  const disabled = Boolean(error || isEmpty || submitted);
  const displayError = Boolean(error && !isEmpty && !submitted);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      component="form"
      maxWidth="sm"
      width="100%"
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        name="password"
        label="Enter a password"
        multiline
        maxRows={10}
        onChange={event => setPassword(event.target.value)}
        fullWidth
        required
      />
      <Stack direction="row" spacing={2} alignItems="center" marginY={3}>
        <Button
          variant="contained"
          color="success"
          type="submit"
          disabled={disabled}
        >
          Submit
        </Button>
        {
          passwordLength > 0 && (
            <Typography variant="subtitle2">
              {passwordLength}
            </Typography>
          )
        }
      </Stack>
      <Fade in={displayError} mountOnEnter unmountOnExit>
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      </Fade>
      <Fade in={submitted} mountOnEnter unmountOnExit>
        <Alert variant="outlined" severity="success">
          You have successfully submitted a password.
        </Alert>
      </Fade>
    </Box>
  );
};

export default PasswordForm;
