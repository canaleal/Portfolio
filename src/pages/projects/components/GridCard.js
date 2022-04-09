import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Tools from '../../../components/Tools';


const GridCard = ({project}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectElement, setProjectElement] = useState({});

  useEffect(() => {
    try {
      setProjectElement(project);
      setIsLoaded(true);
    } catch (error) {
      setError(true);
      setIsLoaded(true);
    }

    return () => { setProjectElement({}) };
  }, [])




  return (


    <div className=" bg-white rounded-lg col-span-1 shadow-xl">

      {isLoaded ?

        error ?
          <p>Error! Unable to load the project.</p>
          :
          <div className='flex flex-col'>
            <Link to={{ pathname: `/projects/${projectElement.id}` }} className=" card card-md"
              style={{ backgroundImage: `url(${projectElement.imglink})` }} loading="lazy">
            </Link>

            <div className='p-4'>
              <p className='font-bold my-2'>{projectElement.title} </p>
              <p className='text-sm my-2'>{projectElement.scale} Sized Project</p>
              <div className='flex my-2'>
                <Tools tools={projectElement.tools} />

              </div>
            </div>
          </div>
        :
        <p>Loading</p>
      }

    </div>
  )

}


export default React.memo(GridCard);
