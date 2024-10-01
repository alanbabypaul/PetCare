import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


