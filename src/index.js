import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css'
import App from './App';
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Elements from "./pages/elements/elements";
import Error from "./pages/error/error";

import reportWebVitals from './reportWebVitals';




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
       
        <Route path="projects" element={<Projects />} />
        <Route path="projects/elements/:id" element={<Elements />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
