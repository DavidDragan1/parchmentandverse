import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { InputDrawer } from './InputDrawer';
import { OutputBox } from './OutputBox';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OutputBox/>
    <InputDrawer/>
  </StrictMode>
)
