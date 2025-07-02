import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)