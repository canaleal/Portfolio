import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Tools from '../../../components/Tools';


const GridCard = ({projectElement}) => {
 
  return (


    <div className=" bg-white rounded-lg col-span-1 shadow-xl">

 
          <div className='flex flex-col'>
            <Link to={{ pathname: `/projects/${projectElement.id}` }} >

                <div className='card card-md' style={{ backgroundImage: `url(${projectElement.imglink})` }} loading="lazy"></div>
            </Link>

            <div className='p-4'>
              <p className='font-bold my-2'>{projectElement.title} </p>
              <p className='text-sm my-2'>{projectElement.scale} Sized Project</p>
              <div className='flex my-2'>
                <Tools tools={projectElement.tools} />

              </div>

              <div className='ellipsis'>
                  <p className='my-2 '>{projectElement.description}</p>
                </div>

                <Link to={{ pathname: `/projects/${projectElement.id}` }}  className="card-btn my-2 rounded-lg mt-4">Read More</Link>

                {
                projectElement.githublink !== 'null' ?
                    <a href={projectElement.githublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 ml-2 rounded-lg">Code</a>
                    :
                    null
            }
             
            </div>
          </div>
        

    </div>
  )

}


export default React.memo(GridCard);
