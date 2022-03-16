import React, { Component } from 'react'
import {useState, useEffect}  from 'react';
import { Outlet, Link } from "react-router-dom";

const Card=(props)=> {

    const [projectElement, setProjectElement] = useState({});

    useEffect(() => {
      setProjectElement(props.project)
    }, [])
    
  
    return (
      <div className="border rounded-lg  grid sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 my-4">
           <Link to={{pathname: `/projects/elements/${projectElement.id}`}} className="card row-span-2 py-2"
                    style={{backgroundImage: `url(${projectElement.imglink})`}} loading="lazy">
         </Link>
          <div className='row-span-2 p-2'>
              <h2 className='text-xl weight-bold'>{projectElement.title}</h2>
              <p className='weight-bold text-blue-600 py-2'>{projectElement.author}</p>
             
              <p className=''>{projectElement.description}</p>
              
          </div>

      </div>
    )
  
}


export default Card;
