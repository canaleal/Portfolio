import React, { Component } from 'react'

import { useState, useEffect } from 'react';
import Card from './components/card';


const Projects = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectsList, setProjectsList] = useState([]);
    const [applicationList, setApplicationList] = useState([]);
    const [apiList, setApiList] = useState([]);
    const [tools, setTools] = useState([]);




    useEffect(() => {

        const fetchProjects = fetch('data/Projects.json'
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

            let toolsList = getToolsList(myJson['Data'], 'tools')
            setTools(toolsList)


            let projectsList = filterDataIfPropertyIsFalse(myJson['Data'], 'isDisable')
            setProjectsList(projectsList)

            setIsLoaded(true);


        }).catch(error => {


            setError(true);
            setIsLoaded(true);
        });

        return () => { setIsLoaded(false) };
    }, []);


    function getToolsList(objectList, property) {

        let list = [];

        for (let i = 0; i < objectList.length; i++) {
            list.push(objectList[i][property]);
        }


        let flat = [].concat.apply([], list);
        let unique = flat.filter(function (elem, pos) {
            return flat.indexOf(elem) == pos;
        });

        return unique;
    }

    function filterDataIfPropertyIsFalse(objectList, property) {

        let list = [];

        for (let i = 0; i < objectList.length; i++) {
            if (objectList[i][property] == false) {
                list.push(objectList[i]);
            }
        }

        return list;
    }

 

    return (
        <div className="main " >

            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div className='h-full w-full flex flex-col'>
                        <h1 className='text-4xl font-bold'>Projects</h1>

                        <div className='bg-white flex flex-wrap justify-between  rounded-lg p-2 shadow-lg my-4' >

                            {
                                tools.map((tool) => {
                                    return (
                                        <img title={tool} key={tool} className='img-icon w-8 mx-2 py-2' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`} />
                                    )
                                })
                            }

                        </div>


                      
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                            {projectsList.map(project => (
                                
                                <Card key={project.id} project={project} />
                                  

                            ))}
                        </div>

                    </div>
                :
                <p>Loading</p>
            }


        </div>
    );

};

export default Projects;