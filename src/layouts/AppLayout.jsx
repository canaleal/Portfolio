import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

function AppLayout() {
  return (
    <>
      <Navbar />

      <section className="main">
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default AppLayout;
