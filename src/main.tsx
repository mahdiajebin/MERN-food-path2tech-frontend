import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus:false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    {/* wrapping  approutes with auth0 to get acces too all components */}
    <QueryClientProvider client={queryClient}>
    <Auth0ProviderWithNavigate>  
      <AppRoutes/>
    </Auth0ProviderWithNavigate>
    </QueryClientProvider>
  </Router>
  </StrictMode>
)
