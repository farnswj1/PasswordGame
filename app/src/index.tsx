import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'assets/scss/index.scss';

const root = createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
