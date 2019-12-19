import React from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';

function App() {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <div className="App">
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
