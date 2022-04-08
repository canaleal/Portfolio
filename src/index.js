import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css'
import App from './App';
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectPage from "./pages/project/ProjectPage";
import ErrorPage from "./pages/error/ErrorPage";
import GalleryPage from './pages/gallery/GalleryPage';
import ArtPage from './pages/art/ArtPage';

import reportWebVitals from './reportWebVitals';



//Import font awesome and some icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPython, faJs} from "@fortawesome/free-brands-svg-icons";
import CarLogosPage from './pages/logos/CarLogosPage';
import AboutPage from './pages/about/AboutPage';


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
        <Route index element={<HomePage />} />
       
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="gallery/:id" element={<ArtPage />} />
        <Route path="logos" element={<CarLogosPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
