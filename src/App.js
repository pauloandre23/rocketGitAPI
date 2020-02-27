import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Global } from '@jest/types';

function App() {
  return (
        <>
    <Routes />
    <GlobalStyle />
        </>
  );
}

export default App;
