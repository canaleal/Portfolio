import React, { Component } from 'react'

import { useState, useEffect } from 'react';
import Card from './components/GridCard';
import Tools from '../../components/Tools';
import { getToolsList, filterDataIfPropertyIsFalse } from '../../util/ProjectsFilter';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import { getDataUsingFetch } from '../../util/FetchingData';

const ProjectsPage = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectsList, setProjectsList] = useState([]);
    const [tools, setTools] = useState([]);



  

    async function getData(){
        try{
            const projectsJson = await getDataUsingFetch('data/Projects.json');
            const projectsList = filterDataIfPropertyIsFalse(projectsJson, 'isDisable')
            const toolsList = getToolsList(projectsJson, 'tools')
            setTools(toolsList)

            if(projectsList && projectsList.length > 0){
                setProjectsList(projectsList);
            }
            else{
               throw new Error('Projects list is empty')
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
       

        return () => { setProjectsList([]); setTools([]); };
    }, []);





    return (
        <div className="main " >

            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div className='h-full w-full flex flex-col'>

                        <PageHeader title={'Projects'} color={'bg-blue'}/>

                        {/* <div className='bg-white rounded-lg p-2 shadow-lg my-4' >
                            <Tools tools={tools} />
                        </div>
                         */}

                        <div className='px-5 my-4 '>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
                                {projectsList.map(project => (
                                    <Card key={project.id} project={project} />
                                ))}
                            </div>
                        </div>


                        <Footer />



                    </div>
                :
                <p></p>
            }


        </div>
    );

};

export default React.memo(ProjectsPage);