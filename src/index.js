import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import Contact from "./pages/contact/Contact";
import AddCars from "./pages/addcars/AddCars";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/cars' element={<Cars />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/addcars' element={<AddCars />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);