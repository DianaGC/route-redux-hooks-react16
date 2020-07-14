import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
  <div>
    <Routes></Routes>
  </div>
  </BrowserRouter>
)

export default App;
