import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    {/* wrapping  approutes with auth0 to get acces too all components */}
    <Auth0ProviderWithNavigate>  
      <AppRoutes/>
    </Auth0ProviderWithNavigate>
  </Router>
  </StrictMode>
)
