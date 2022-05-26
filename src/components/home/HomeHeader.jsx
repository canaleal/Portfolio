import React from 'react';

function HomeHeader() {
  return (
    <section id="home" className="h-screen">
      <div className="header h-full flex flex-col justify-center items-center mx-auto px-8">
        <h2 className="text-4xl ">Alex Canales</h2>
        <p className="mb-8">Experienced creating responsive applications for mobile, desktop & web.</p>

        <a href="/#about" className="flex flex-col about-btn px-8 hover:mt-8">
          <p className="my-2">About Me</p>
          <i className="fa fa-arrow-down fa-2x mx-auto" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default React.memo(HomeHeader);
