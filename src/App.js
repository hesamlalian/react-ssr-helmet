import React from 'react';
import Home from './Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
        <body class="dark" />
      </Helmet>
      <Home name="Sammy" />
    </>
    
  )
}

export default App;
