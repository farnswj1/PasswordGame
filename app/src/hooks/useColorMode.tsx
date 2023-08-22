import { useContext } from 'react';
import { ColorModeContext } from 'contexts';

const useColorMode = () => useContext(ColorModeContext);

export default useColorMode;
