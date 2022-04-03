

import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Art = (props) => {

  let { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [art, setArt] = useState({});




  useEffect(() => {

    const fetchArt = fetch('../../data/Art.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    fetchArt.then(response => {
      return response.json();
    }).then(myJson => {

      let element = myJson['Data'].find(item => item['id'] == id)
      setArt(element);
      setIsLoaded(true);

    }).catch(error => {


      setError(true);
      setIsLoaded(true);
    });

    return () => { setIsLoaded(false) };
  }, []);



  return (
    <div className="main">

      {isLoaded ?

        error ?
          <p>Error! Art does not exist.</p>

          :
          <div className='h-full w-full flex flex-col'>
            <h1 className='text-4xl font-bold'>{art.title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 bg-white shadow-xl">

              <div className='col-span-2'>
                <div to={{ pathname: `/projects/element/${art.id}` }} className="card card-4xl"
                  style={{ backgroundImage: `url(${art.imglink})` }} loading="lazy">
                </div>
              </div>

              <div className='col-span-1 p-4'>
                <p className='font-bold'>Author:</p>
                <p className='highlight my-2 mb-4' >{art.author}</p>
                <p className='font-bold'>Created At:</p>
                <p className='my-2 mb-4'>{art.date}</p>
              </div>

            </div>

          </div>

        :
        <p>Loading</p>
      }


    </div>
  )

}

export default Art; 