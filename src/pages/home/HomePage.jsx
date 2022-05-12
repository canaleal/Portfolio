import React from 'react';
import Footer from '../../common/Footer';
import HomeBody from './components/HomeBody';
import MainHeader from './components/MainHeader';

function Home() {
  return (

    <div className="main">
      <MainHeader />
      <HomeBody />
      <Footer />
    </div>

  );
}

export default React.memo(Home);
