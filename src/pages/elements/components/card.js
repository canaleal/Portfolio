import React, { Component } from 'react'
import {useState, useEffect}  from 'react';
import { Outlet, Link } from "react-router-dom";

const Card=(props)=> {

    const [projectElement, setProjectElement] = useState({});

    useEffect(() => {
      setProjectElement(props.project)
    }, [])
    
  
    return (
      <div className="flex-1 flex flex-col my-4">
           <div  className="card sm:flex-1 py-2"
                    style={{backgroundImage: `url(${projectElement.imglink})`}} loading="lazy">
                      
         </div>
          <div className='py-2'>
             
              <p className='weight-bold text-blue-600 py-2'>{projectElement.author}</p>
             
              <p className=''>{projectElement.description}</p>

              <p className=''>{projectElement.date}</p>


             
          </div>

          

      </div>
    )
  
}


export default Card;
