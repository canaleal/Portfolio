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


    <div className="border  rounded-lg  col-span-1 shadow-xl">

      {isLoaded ?

        error ?
          <p>Error! Unable to load projects.</p>
          :
          <>
            <Link to={{ pathname: `/projects/project/${projectElement.id}` }} className="card card-md"
              style={{ backgroundImage: `url(${projectElement.imglink})` }} loading="lazy">
            </Link>

            <div className='p-4'>
              <h2 className='text-lg mb-2'>{projectElement.title}</h2>
             

              <div className='flex my-2'>

                {
                  projectElement.tools.map((tool, index) => {
                    return (
                      <img  title={tool}  key={tool} className='img-icon w-8 mx-2' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`} />
                    )
                  })
                }

              </div>


              <Link to={{ pathname: `/projects/project/${projectElement.id}` }}className="card-btn my-2 rounded-lg">View Project</Link>

            </div>
          </>
        :
        <p>Loading</p>
      }



    </div>
  )

}


export default Card;
