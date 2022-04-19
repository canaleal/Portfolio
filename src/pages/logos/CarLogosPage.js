import React, {  } from 'react'

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { getDataUsingFetch } from '../../services/FetchingData';


import Card from './components/GridCard';

const CarLogosPage = ({}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [logoList, setLogoList] = useState([]);
   

    async function getData(){
        try{
            const logoJson = await getDataUsingFetch('data/Logos.json');
           
        
            if(logoJson && logoJson.length > 0){
                setLogoList(logoJson);
            }
            else{
               throw new Error('Logo list is empty')
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

        return () => { setLogoList([]); };
    }, []);





    return (
        <div className="main " >

            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div className='h-full w-full flex flex-col'>

                        <PageHeader title={'Car Brands'} color={'bg-blue'} />


                        <div className='px-5 my-4 '>
                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                                {logoList.map(logoElement => (
                                    <Card logoElement={logoElement} />
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

export default React.memo(CarLogosPage);