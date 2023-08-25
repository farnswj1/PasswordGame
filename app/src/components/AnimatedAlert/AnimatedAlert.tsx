import { FC } from 'react';
import { Alert, AlertProps, Fade, useTheme } from '@mui/material';

interface AnimatedAlertProps extends AlertProps {
  in?: boolean;
}

const AnimatedAlert: FC<AnimatedAlertProps> = ({
  in: _in,
  children,
  ...rest
}) => {
  const { palette } = useTheme();
  const variant = palette.mode === 'light' ? 'filled' : 'outlined';

  return (
    <Fade in={_in} mountOnEnter unmountOnExit>
      <Alert variant={variant} {...rest}>
        {children}
      </Alert>
    </Fade>
  );
};

export default AnimatedAlert;
