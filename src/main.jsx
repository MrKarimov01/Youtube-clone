import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./components/index"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import "./index.css"




createRoot(document.getElementById('media-hub')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
