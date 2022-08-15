//client/index.js

import React from "react";
import App from "./components/App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      {/* <Route path="/favorites" element={}/> */}
    </Routes>
  </BrowserRouter>
);
