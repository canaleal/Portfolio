import React from 'react';
import AboutBody from 'components/home/AboutBody';
import HomeHeader from 'components/home/HomeHeader';
import Stacks from 'components/home/Stacks';

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
