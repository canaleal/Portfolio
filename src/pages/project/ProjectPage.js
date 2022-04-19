import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { getDataUsingFetch } from '../../services/FetchingData';
import Description from './components/Description';


const ProjectPage = (props) => {

  let { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});




  async function getData(){
    try{
        const projectsJson = await getDataUsingFetch('../../data/Projects.json');
       
        let projectElement = projectsJson.find(item => item['id'] === parseInt(id));
       
    
        if(projectElement){
          setProject(projectElement);
        }
        else{
           throw new Error('Project is empty')
        }     
    }
    catch{
        setError(true);
    }
    finally{
        setIsLoaded(true);
    }
}

  useEffect(() => {

   getData();

    return () => { setProject({}) };
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
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4  bg-white  shadow-xl ">

                <div className='col-span-2'>
                  <div  className="card card-4xl"
                    style={{ backgroundImage: `url(${project.imglink})` }} loading="lazy">
                  </div>
                </div>

                <div className='col-span-2 p-4 '>

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