import React from 'react';
import Tools from 'components/Tools';
import GridLayout from 'layouts/GridLayout';

function AboutBody() {
  const favoriteToolList = ['nextjs', 'svelte', 'nodejs', 'express', 'mongodb', 'postgresql', 'docker', 'googlecloud'];
  return (
    <GridLayout id="about" columns="md:grid-cols-2" paddingY="py-16">

      <div className="col-span-1">
        <img height="100" width="auto" className="object-none object-center card card-md" src="\assets\images\art\snowbound.webp" alt="Logo" />
      </div>

      <div className="col-span-1">

        <h2 className="text-4xl  mb-4">About Me</h2>
        <p className="my-2">
          Software developer based in Oakville, Ontario interested in
          Predictive Image Analysis (Object Detection) and Data Science.
        </p>

        <p className="my-4">
          Although I spend most of my days programming or
          working with computers, I enjoy economics and finance
          and learning more about how the world works.
          On my free time, I like reading up on financial reports (I know, it sounds boring)
          , investing, and creating programs that help me manage my money.
          {' '}

        </p>

        <p className="font-bold ">Favorite Tools:</p>
        <div className="flex my-2">
          <Tools tools={favoriteToolList} />
        </div>

      </div>
    </GridLayout>

  );
}

export default React.memo(AboutBody);
