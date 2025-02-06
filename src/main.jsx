import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import InputDrawer from './InputDrawer';
import OutputBox from './OutputBox';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <InputDrawer />
    </BrowserRouter>
  </StrictMode>
);

createRoot(document.getElementById('output')).render(
  <StrictMode>
    <BrowserRouter>
      <OutputBox />
    </BrowserRouter>
  </StrictMode>
);
