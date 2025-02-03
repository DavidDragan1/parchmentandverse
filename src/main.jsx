import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InputDrawer from './InputDrawer';
import OutputBox from './OutputBox';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputDrawer/>
  </StrictMode>
)

createRoot(document.getElementById('output')).render(
  <StrictMode>
    <OutputBox/>
  </StrictMode>
)
