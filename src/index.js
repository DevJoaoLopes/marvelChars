import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)

reportWebVitals();
