


import React from 'react'

import { useState, useEffect } from 'react';

const Art = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);



    const [artObjectList, setArtObjectList] = useState([]);



    useEffect(() => {

        const fetchProjects = fetch('data/Art.json'
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



            setArtObjectList(myJson['Data'])
            setIsLoaded(true);
          

        }).catch(error => {


            setError(true);
            setIsLoaded(true);
        });


    }, []);


    

    return (
        <div className="main ">
            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div>
                        <h1 className='text-4xl font-bold'>Art/Images</h1>

                        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-4 my-4 ">


                            {artObjectList.map((art) => {
                                return (
                                    <div key={art.id} className={`col-span-1 sm:col-span-${art.col_span} shadow-xl`}>
                                        <div className="card card-md"
                                            style={{ backgroundImage: `url(${art.imglink})` }} loading="lazy">
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                :
                <p>Loading</p>
            }
        </div>
    )
}

export default Art;