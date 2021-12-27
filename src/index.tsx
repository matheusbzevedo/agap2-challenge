import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'
import Details from './pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episode/:id' element={<Details />} />
        <Route path='*' element={
          <>
            <Navbar />
            <h1>404</h1>
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
