import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Tools from '../../../components/Tools';


const GridCard = ({ projectElement }) => {
  const { id, title, description, tools, githublink, link, imglink, author, scale, year } = projectElement;

  const returnLinkComponentGivenGithubLink = (githublink) => {

    if (githublink !== 'null') {
      return <a href={githublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 ml-2 rounded-lg">Code</a>
    }
    else {
      return null;
    }
  }

  const returnLinkComponentGivenTitle = (title) => {


    switch (title) {
      case 'Automobile Logo API':
        return <Link to="/logos" className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</Link>
      case 'Portfolio Website':
        return <Link to="/" className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</Link>
      default:
        return null;
    }
  }


  return (


    <div className=" bg-white rounded-lg col-span-1 shadow-xl">


      <div className='flex flex-col'>
        <Link to={{ pathname: `/projects/${id}` }} >

          <img height='100' width='auto' src={`${imglink}`} alt={`${title}`} className='card card-md' loading="lazy" />
        </Link>

        <div className='p-4'>
          <p className='font-bold my-2'>{title} </p>
          <p className='text-sm my-2'>{scale} Sized Project</p>
          <div className='flex my-2'>
            <Tools tools={tools} />

          </div>

          <div className='ellipsis'>
            <p className='my-2 '>{description}</p>
          </div>

          <Link to={{ pathname: `/projects/${id}` }} className="card-btn my-2 rounded-lg mt-4">More</Link>

          {
            returnLinkComponentGivenGithubLink(githublink)
          }

          {
            returnLinkComponentGivenTitle(title)
          }

        </div>
      </div>


    </div>
  )

}


export default React.memo(GridCard);
