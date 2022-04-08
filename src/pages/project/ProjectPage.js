import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Description from './components/Description';


const ProjectPage = (props) => {

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
          
            <PageHeader title={project.title} color={'bg-blue'}/>

            <div className='px-5 my-4'>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  bg-white  shadow-xl ">

                <div className='col-span-2'>
                  <div  className="card card-4xl"
                    style={{ backgroundImage: `url(${project.imglink})` }} loading="lazy">
                  </div>
                </div>

                <div className='col-span-1 p-4 '>

                  <Description project={project} />

                </div>
              </div>

            </div>


            <Footer/>
          </div>

        :
        <p></p>
      }


    </div>
  )

}

export default React.memo(ProjectPage); 