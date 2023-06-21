import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  // domain="dev-u8h5unwxv1hz2p3y.us.auth0.com"
  // clientId="5SwqDUav2i2nCt6pFwIfkTY73E4L7YwQ"
  // authorizationParams={{
  //   redirect_uri: window.location.origin
  // }}>
    <AuthProvider>

      <App />
    </AuthProvider>

  // </Auth0Provider>
);


