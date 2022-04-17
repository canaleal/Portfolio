import React from 'react'
import { useState, useEffect } from 'react';



const GridCard = ({logo}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoElement, setLogoElement] = useState({});

  useEffect(() => {
    try {
      setLogoElement(logo);
      setIsLoaded(true);
    } catch (error) {
      setError(true);
      setIsLoaded(true);
    }

    return () => { setLogoElement({}) };
  }, [])




  return (


    <div className=" bg-white rounded-lg col-span-1 shadow-xl slide-in-right">

      {isLoaded ?

        error ?
          <p>Error! Unable to load the logo.</p>
          :
          <div className='flex flex-col p-4'>
            <img className="img-icon h-8 w-fit " src={logoElement.link} alt={logoElement.title} />
            
  
     
          
          
              <p className='font-bold my-2'>{logoElement.name} </p>
              <p className='text-sm my-2'>{logoElement.year}</p>
             
          
          </div>
        :
        <p>Loading</p>
      }

    </div>
  )

}


export default React.memo(GridCard);
