import React from 'react';
import Header from './components/HomeBody';

function Home() {
  return (
    <div className="main h-screen">
      <div className="h-full flex flex-col">

        <Header />
      </div>

    </div>
  );
}

export default React.memo(Home);
