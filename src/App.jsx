import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
// global
import { GlobalHeader } from './components/global';

const App = () => {
  return (
    <Router>
      <GlobalHeader />
      <AppRouter></AppRouter>
    </Router>
  );
};

export default App;
