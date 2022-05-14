import React from 'react';

function CarLogoCard({ logoElement }) {
  const {
    link, title, name, year,
  } = logoElement;
  return (

    <div className=" bg-white rounded-lg col-span-1 shadow-xl slide-in-right">

      <div className="flex flex-col p-4">
        <img height="100" width="auto" className="img-icon h-8 w-fit " src={link} alt={title} />

        <p className="font-bold my-2">
          {name}
          {' '}
        </p>
        <p className="text-sm my-2">{year}</p>

      </div>

    </div>
  );
}

export default React.memo(CarLogoCard);
