import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";


import useSound from 'use-sound';


const Card = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectElement, setProjectElement] = useState({});

  useEffect(() => {
    try {
      setProjectElement(props.project);
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
            <Link to={{ pathname: `/projects/project/${projectElement.id}` }} className=" card card-md"
              style={{ backgroundImage: `url(${projectElement.imglink})` }} loading="lazy">
            </Link>

            <div className='p-4'>
              <p className='font-bold my-2'>{projectElement.title} </p>
              <p className='text-sm my-2'>{projectElement.scale} Sized Project</p>
              <div className='flex my-2'>

                {
                  projectElement.tools.map((tool) => {
                    return (
                      <img title={tool} key={tool} className='img-icon w-8 mx-2' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`} />
                    )
                  })
                }

              </div>
            </div>
          </div>
        :
        <p>Loading</p>
      }

    </div>
  )

}


export default Card;
