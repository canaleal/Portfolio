import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

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

  }, [])


  return (

    <div className="border rounded-lg  col-span-1 shadow-xl">


      {isLoaded ?

        error ?
          <p>Error! Unable to load projects.</p>
          :
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2'>

              <div className='col-span-1'>
                <div to={{ pathname: `/projects/element/${projectElement.id}` }} className="card card-lg"
                  style={{ backgroundImage: `url(${projectElement.imglink})` }} loading="lazy">
                </div>
              </div>

              <div className='col-span-1 p-4'>

                <h2 className='text-lg mb-2'>{projectElement.title}</h2>
                <p className='text-blue-600 my-2'>{projectElement.author}</p>
                <p className='my-2'>{projectElement.description}</p>

                <div className='flex my-2'>

                  {
                    projectElement.tools.map((tool, index) => {
                      return (
                        <img  title={tool}  key={tool} className='img-icon w-8 mx-2' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`} />
                      )
                    })
                  }

                </div>

              </div>
            </div>


          </>
        :
        <p>Loading</p>
      }


    </div>



  )

}


export default Card;
