import React from 'react';

function HomeHeader() {
  return (
    <div className="h-screen flex flex-col">
      <div className="header h-full ">
        <div className="flex flex-col justify-center items-center h-full mx-auto px-8">

          <h2 className="text-4xl ">Alex Canales</h2>
          <p className="mb-8">Experienced creating responsive applications for mobile, desktop & web.</p>

          <a href="/#about" className="flex flex-col about-btn px-8 hover:mt-8">
            <p className="my-2">About Me</p>
            <i className="fa fa-arrow-down fa-2x mx-auto" aria-hidden="true" />

          </a>

        </div>
      </div>
    </div>

  );
}

export default React.memo(HomeHeader);
