import React from 'react';
import AboutBody from './components/AboutBody';
import HomeHeader from './components/HomeHeader';
import Stacks from './components/Stacks';

function Home() {
  return (

    <section>
      <HomeHeader />
      <AboutBody />
      <Stacks />
    </section>

  );
}

export default React.memo(Home);
