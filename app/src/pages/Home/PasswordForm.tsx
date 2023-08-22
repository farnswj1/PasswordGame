import { FC, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Fade,
  FormControl,
  InputLabel,
  OutlinedInput,
  Slide,
  Typography
} from '@mui/material';
import { validate } from 'libs';

const PasswordForm: FC = () => {
  const [password, setPassword] = useState<string>('');
  const passwordLength = password.length;
  const isEmpty = (password === '');
  const error = validate(password);
  const disabled = Boolean(error);

  return (
    <Box component="form" maxWidth="sm" width="100%">
      <FormControl fullWidth required>
        <InputLabel htmlFor="password">Enter a password</InputLabel>
        <OutlinedInput
          type="text"
          name="password"
          label="Enter a password"
          multiline
          maxRows={10}
          onChange={event => setPassword(event.target.value)}
        />
      </FormControl>
      <Typography variant="subtitle2">
        {passwordLength > 0 && passwordLength}
        &nbsp;
      </Typography>
      <Box marginY={3}>
        <Button
          variant="contained"
          color="success"
          type="submit"
          disabled={disabled}
        >
          Submit
        </Button>
      </Box>
      <Fade in={!isEmpty && !!error} mountOnEnter unmountOnExit>
        <Alert severity="error">
          {error}
        </Alert>
      </Fade>
    </Box>
  );
};

export default PasswordForm;
