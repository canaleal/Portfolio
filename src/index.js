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
import Element from "./pages/elements/element";
import Error from "./pages/error/error";

import reportWebVitals from './reportWebVitals';
import Art from './pages/art/art';


//Import font awesome and some icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPython, faJs} from "@fortawesome/free-brands-svg-icons";


//Add the icons to the library so they can be used in ever single component
library.add(
  faPython,
  faJs
);


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
       
        <Route path="projects" element={<Projects />} />
        <Route path="projects/element/:id" element={<Element />} />
        <Route path="art" element={<Art />} />
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
