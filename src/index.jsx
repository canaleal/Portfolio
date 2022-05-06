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
import ProjectsPage from './pages/projects/ProjectsPage';
import ProjectPage from './pages/projects/ProjectPage';
import ErrorPage from './pages/error/ErrorPage';
import GalleryPage from './pages/gallery/GalleryPage';
import ArtPage from './pages/gallery/ArtPage';
import reportWebVitals from './reportWebVitals';

// Import font awesome and some icons
import AutomobileLogoPage from './pages/AutomobileLogo/AutomobileLogoPage';
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

        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="gallery/:id" element={<ArtPage />} />
        <Route path="logos" element={<AutomobileLogoPage />} />
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
