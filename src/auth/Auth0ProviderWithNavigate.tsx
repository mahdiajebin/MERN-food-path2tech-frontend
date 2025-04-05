// Code that uses the sdk to connect to the auth0 account
// for components to be accesed thorugh auth0
import React from 'react'
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';

type Props = {
    children: React.ReactNode;
}


const Auth0ProviderWithNavigate = ({children} : Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri =  import.meta.env.VITE_AUTH0_CALLBACK_URL;
  ;
    //const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
    

    if(!domain || !clientId || !redirectUri){
        throw new Error("unable to initialize auth");
    }
    const onRedirectCallback = (appState?: AppState, user?: User) => {
            //current url- on appstate - the user is on and user object details of loged user
            console.log("Redirect Callback Triggered");
            console.log("AppState:", appState);
            console.log("USER", user);
    }
 
   return (
   
    //when user signs then auth0 will send the user back to this app-redirectUri
    <Auth0Provider
     domain={domain}
     clientId={clientId}
     authorizationParams={{
      redirect_uri: redirectUri,
    }}
     onRedirectCallback={ onRedirectCallback}
    > 
    {children}
    </Auth0Provider>
   )
  
}


export default Auth0ProviderWithNavigate;