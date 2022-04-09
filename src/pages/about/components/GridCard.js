import React from 'react'
import { useState, useEffect } from 'react';


const GridCard = ({work}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [workElement, setWorkElement] = useState({});

  useEffect(() => {
    try {
      setWorkElement(work);
      setIsLoaded(true);
    } catch (error) {
      setError(true);
      setIsLoaded(true);
    }

    return () => { setWorkElement({}) };
  }, [])




  return (


    <div className=" bg-white rounded-lg col-span-1 shadow-xl">

      {isLoaded ?

        error ?
          <p>Error! Unable to load the work.</p>
          :
          <div className='flex flex-col'>
            <div  className=" card card-md"
              style={{ backgroundImage: `url(${workElement.imglink})` }} loading="lazy">
            </div>

            <div className='p-4'>
              <p className='font-bold my-2'>{workElement.title}</p>
             <p className='text-sm my-2'>{workElement.description}</p>
              <p className='text-sm my-2'>{workElement.startDate} to {workElement.endDate}</p>
            </div>
          </div>
        :
        <p>Loading</p>
      }

    </div>
  )

}


export default React.memo(GridCard);
