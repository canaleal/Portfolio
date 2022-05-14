import React from 'react';
import Tools from '../../../common/Tools';

function HomeBody() {
  const toolList = ['nextjs', 'svelte', 'nodejs', 'express', 'mongodb', 'docker', 'googlecloud'];
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-16">

      <div className="col-span-1">
        <img className="object-none object-center card card-md" height="100" width="auto" src="\assets\images\art\snowbound.webp" alt="Logo" />
      </div>

      <div className="col-span-1">

        <h2 className="text-4xl  mb-4">About Me</h2>
        <p className="my-2  mb-4">
          Software developer based in Oakville, Ontario interested in
          Predictive Image Analysis (Object Detection) and Data Science.
        </p>

        <p className="font-bold ">Favorite Tools:</p>
        <div className="flex my-2">
          <Tools tools={toolList} />
        </div>

      </div>

    </div>
  );
}

export default HomeBody;
