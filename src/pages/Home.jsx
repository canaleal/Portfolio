import React from 'react';
import AboutBody from 'components/about/AboutBody';
import HomeHeader from 'components/about/HomeHeader';
import Stacks from 'components/about/Stacks';

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
