import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPython, faJs } from '@fortawesome/free-brands-svg-icons';

import HomePage from './pages/home/HomePage';
import Projects from './pages/projects/Projects';
import ProjectId from './pages/projects-Id/Projects-Id';
import GalleryPage from './pages/gallery/GalleryPage';
import GalleryId from './pages/gallery-Id/Gallery-Id';

import ErrorPage from './pages/error/ErrorPage';
import reportWebVitals from './reportWebVitals';

// Import font awesome and some icons
import CarLogos from './pages/CarLogos/CarLogos';
import Layout from './layouts/Layout';

import './styles/style.css';

// Add the icons to the library so they can be used in ever single component
library.add(
  faPython,
  faJs,
);

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectId />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="gallery/:id" element={<GalleryId />} />
        <Route path="carLogos" element={<CarLogos />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
