import React from 'react';
import { addRawToImagePath } from '../../../helpers/ImageLinks';

function EmploymentCard({ aboutElement }) {
  const {
    imglink, title, role, startDate, endDate, description,
  } = aboutElement;
  return (

    <div className="  rounded-lg col-span-1 shadow-xl">

      <div className="flex flex-col">

        <img height="100" width="auto" src={`${addRawToImagePath(imglink)}`} alt={`${title}`} className="card card-md" loading="lazy" />
        <div className="p-4">
          <p className="font-bold my-2">{title}</p>
          <p className="highlight text-sm my-2">{role}</p>

          <p className="text-sm my-2">
            {startDate}
            {' '}
            to
            {' '}
            {endDate}
          </p>

          <hr />
          <p className="font-bold my-2">Description</p>
          <p className="text-sm my-2 ">{description}</p>

        </div>

      </div>
    </div>
  );
}

export default React.memo(EmploymentCard);
