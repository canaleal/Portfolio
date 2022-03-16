import React, { Component } from 'react'

import { useState, useEffect } from 'react';
import Card from './components/card';


const Projects = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projectsList, setProjectsList] = useState([]);




    useEffect(() => {

        const fetchProjects = fetch('Projects.json'
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



            setProjectsList(myJson['Data'])
            setIsLoaded(true);
            console.log(myJson['Data'])

        }).catch(error => {


            setError(true);
            setIsLoaded(true);
        });


    }, []);





    return (
        <div className="main">

            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div>
                        <h1 className='text-4xl weight-bold'>Projects</h1>

                        <div className="grid grid-cols-1 ">
                            {
                                projectsList.map(item => (<Card key={item.id} project={item} />))
                            }

                        </div>
                    </div>
                :
                <p>Loading</p>
            }


        </div>
    );

};

export default Projects;