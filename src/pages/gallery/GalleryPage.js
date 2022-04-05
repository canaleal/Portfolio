


import React from 'react'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [artList, setArtList] = useState([]);




    useEffect(() => {


        const fetchArt = fetch('data/Art.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );

        fetchArt.then(response => {
            return response.json();
        }).then(myJson => {

            setArtList(myJson['Data'])
            setIsLoaded(true);

        }).catch(error => {

            setError(true);
            setIsLoaded(true);
        });


        return () => { setIsLoaded(false) };

    }, []);




    return (
        <div className="main ">
            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div className='h-full w-full flex flex-col'>
                        <h1 className='text-4xl font-bold'>Art/Images</h1>

                        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-4 my-4 ">


                            {
                                artList.map((art) => {
                                    return (

                                        <Link key={art.id} to={{ pathname: `/gallery/${art.id}` }} className={`bg-white col-span-${art.col_span} shadow-xl `}>
                                            <div className={`card card-lg ${art.isNsfw ? 'blur' : ''}`}
                                                style={{ backgroundImage: `url(${art.imglink})` }} loading="lazy">
                                            </div>
                                        </Link>

                                    )
                                })
                            }

                        </div>
                    </div>
                :
                <p>Loading</p>
            }
        </div>
    )
}

export default GalleryPage;