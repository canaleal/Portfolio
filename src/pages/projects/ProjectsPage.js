import React, { Component } from 'react'

import { useState, useEffect } from 'react';
import Card from './components/GridCard';
import AboutCard from './components/AboutCard';
import Tools from '../../components/Tools';
import { getToolsList, filterDataIfPropertyIsFalse } from '../../util/ProjectsFilter';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import { getDataUsingFetch } from '../../services/FetchingData';

const ProjectsPage = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectsList, setProjectsList] = useState([]);
    const [tools, setTools] = useState([]);

    const [workList, setWorkList] = useState([]);
    const [educationList, setEducationList] = useState([]);

  

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

            const work = await getDataUsingFetch('data/Work.json');
            const education = await getDataUsingFetch('data/Education.json');
            setWorkList(work);
            setEducationList(education);

           
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

                        {/* <div className='bg-white rounded-lg px-5 shadow-lg my-4' >
                            <Tools tools={tools} />
                        </div> */}
                        

                        <div className='px-5 my-4 '>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
                                {projectsList.map(projectElement => (
                                    <Card key={projectElement.id} projectElement={projectElement} />
                                ))}
                            </div>
                        </div>





                        <PageHeader title={'Work Experience'} color={'bg-blue'} />

                        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-4 my-4 px-5">


                            {
                                workList.map((aboutElement) => {
                                    return (

                                        <AboutCard key={aboutElement.id} aboutElement={aboutElement} />

                                    )
                                })
                            }

                        </div>



                        <PageHeader title={'Education and Certificates'} color={'bg-blue'} />

                        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-4 my-4 px-5">


                            {
                                educationList.map((aboutElement) => {
                                    return (

                                        <AboutCard key={aboutElement.id} aboutElement={aboutElement} />

                                    )
                                })
                            }

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