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
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/project";
import Error from "./pages/error/error";

import reportWebVitals from './reportWebVitals';
import Gallery from './pages/gallery/gallery';
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
        <Route path="projects/:id" element={<Project />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<Art />} />
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
