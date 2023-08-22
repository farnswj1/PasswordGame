import { createContext } from 'react';
import { PaletteMode } from '@mui/material';

type ToggleColorMode = (mode: PaletteMode) => void;

const ColorModeContext = createContext<ToggleColorMode>(() => {});

export default ColorModeContext;
