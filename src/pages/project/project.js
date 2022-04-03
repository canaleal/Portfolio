import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Project = (props) => {

  let { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});




  useEffect(() => {

    const fetchProjects = fetch('../../data/Projects.json'
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

    return () => { setIsLoaded(false) };
  }, []);



  return (
    <div className="main">

      {isLoaded ?

        error ?
          <p>Error! Project does not exist.</p>

          :
          <div className='h-full w-full flex flex-col'>
            <h1 className='text-4xl font-bold'>{project.title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 bg-white  shadow-xl">

              <div className='col-span-2'>
                <div to={{ pathname: `/projects/element/${project.id}` }} className="card card-4xl"
                  style={{ backgroundImage: `url(${project.imglink})` }} loading="lazy">
                </div>
              </div>

              <div className='col-span-1 p-4 '>

                <p className='font-bold'>Author:</p>
                <p className='highlight my-2 mb-4' >{project.author}</p>
                <p className='font-bold'>Project Scale:</p>
                <p className='my-2 mb-4'>{project.scale}</p>
                <p className='font-bold'>Description:</p>
                <p className='my-2 mb-4'>{project.description}</p>
                <p className='font-bold '>Tools:</p>
                <div className='flex my-2'>

                  {
                    project.tools.map((tool) => {
                      return (
                        <img title={tool} key={tool} className='img-icon w-8 mx-2' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`} />
                      )
                    })
                  }

                </div>

              </div>
            </div>
          </div>

        :
        <p>Loading</p>
      }


    </div>
  )

}

export default Project; 