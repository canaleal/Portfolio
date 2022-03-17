import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './components/card';

const Elements = (props) => {

  let { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});




  useEffect(() => {

    const fetchProjects = fetch('../../Projects.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    fetchProjects.then(response => {
      return response.json();
    }).then(myJson => {

      let element = myJson['Data'].find(item => item['id'] == id)
      setProject(element);
      setIsLoaded(true);

    }).catch(error => {


      setError(true);
      setIsLoaded(true);
    });


  }, []);



  return (
    <div className="main sm:h-screen">

      {isLoaded ?

        error ?
          <p>Error! Project does not exist.</p>

          :
          <div className='h-full w-full flex flex-col'>
            <h1 className='text-4xl weight-bold'>{project.title}</h1>



            <Card project={project} />

          </div>

        :
        <p>Loading</p>
      }


    </div>
  )

}

export default Elements; 