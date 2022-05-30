import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPython, faJs } from '@fortawesome/free-brands-svg-icons';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectId from './pages/Projects-Id';
import Gallery from './pages/Gallery';
import GalleryId from './pages/Gallery-Id';
import Error from './pages/Error';

// Import font awesome and some icons
import Logos from './pages/Logos';
import AppLayout from './layouts/AppLayout';

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
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectId />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<GalleryId />} />
        <Route path="logos" element={<Logos />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
