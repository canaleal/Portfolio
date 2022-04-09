import React, { Component } from 'react'

import { useState, useEffect } from 'react';
import Card from './components/GridCard';
import Tools from '../../components/Tools';
import { getToolsList, filterDataIfPropertyIsFalse } from '../../util/Filters';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

const ProjectsPage = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectsList, setProjectsList] = useState([]);
    const [tools, setTools] = useState([]);




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

            const toolsList = getToolsList(myJson['Data'], 'tools')
            setTools(toolsList)

            const projectsList = filterDataIfPropertyIsFalse(myJson['Data'], 'isDisable')
            setProjectsList(projectsList)

            setIsLoaded(true);


        }).catch(error => {


            setError(true);
            setIsLoaded(true);
        });

        return () => { setIsLoaded(false) };
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
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
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