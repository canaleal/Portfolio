


import { data } from 'autoprefixer';
import React from 'react'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { getDataUsingFetch } from '../../services/FetchingData';

const GalleryPage = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [artList, setArtList] = useState([]);


    async function getData(){
        try{
            const artJson = await getDataUsingFetch('data/Art.json');
                   
            if(artJson && artJson.length > 0){
                setArtList(artJson);
            }
            else{
               throw new Error('Art list is empty')
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

        return () => { setArtList([]) };

    }, []);




    return (
        <div className="main ">
            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div className='h-full w-full flex flex-col'>
                  
                        <PageHeader title={'Gallery'} color={'bg-green'}/>
                        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-4 my-4 px-5">


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


                        <Footer/>
                    </div>
                :
                <p>Loading</p>
            }
        </div>
    )
}

export default React.memo(GalleryPage);