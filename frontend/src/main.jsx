import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='660312071410-ovr517pfuevf3318nnt3guued5ot1kc2.apps.googleusercontent.com'>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
