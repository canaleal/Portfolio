import React from 'react';
import PageHeader from 'components/PageHeader';
import Tools from 'components/Tools';

function StackCard({ stackElement }) {
  const {
    title, description, frontEndTools, backEndTools, databaseTools, deploymentTools,
  } = stackElement;
  return (
    <div className=" card rounded-lg col-span-1 shadow-xl">

      <PageHeader title={title} color="bg-dark" rounded="rounded-lg" />

      <div className="p-4">

        <p className="font-bold my-2">Description</p>
        <p className="text-sm my-2 ">{description}</p>

        <p className="font-bold ">Front End Tools:</p>
        <div className="flex my-2">
          <Tools tools={frontEndTools} />
        </div>

        <p className="font-bold ">Back End Tools:</p>
        <div className="flex my-2">
          <Tools tools={backEndTools} />
        </div>

        <p className="font-bold ">Database Tools:</p>
        <div className="flex my-2">
          <Tools tools={databaseTools} />
        </div>

        <p className="font-bold ">Deployment Tools:</p>
        <div className="flex my-2">
          <Tools tools={deploymentTools} />
        </div>

      </div>

    </div>
  );
}

export default StackCard;
