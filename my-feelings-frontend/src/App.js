import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
