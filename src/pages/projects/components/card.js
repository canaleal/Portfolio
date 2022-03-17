import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const Card = (props) => {

  const [projectElement, setProjectElement] = useState({});

  useEffect(() => {
    setProjectElement(props.project)
  }, [])


  return (
    <div className="border rounded-lg my-4">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
        <div className='col-span-1'>
          <Link to={{ pathname: `/projects/elements/${projectElement.id}` }} className="card "
            style={{ backgroundImage: `url(${projectElement.imglink})` }} loading="lazy">
          </Link>
        </div>
      
        <div className='col-span-1'>
          <h2 className='text-xl weight-bold'>{projectElement.title}</h2>
          <p className='weight-bold text-blue-600 py-2'>{projectElement.author}</p>

          <p className=''>{projectElement.description}</p>


         
        </div>

      </div>


    </div>
  )

}


export default Card;
