import React from 'react';

function HomeBody() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 my-4">

      <div className="col-span-1">
        <img className="object-none object-center card card-md" height="100" width="auto" src="\assets\images\art\snowbound.webp" alt="Logo" />
      </div>

      <div className="col-span-1">

        <h2 className="text-4xl ">About Me</h2>
        <p className="my-2">
          Software developer based in Oakville, Ontario interested in
          Predictive Image Analysis (Object Detection) and Data Science.
        </p>
      </div>

    </div>
  );
}

export default HomeBody;
