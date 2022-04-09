import React, { Component } from 'react'

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';


import Card from './components/Card';

const CarLogosPage = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [logoList, setLogoList] = useState([]);
    const [tools, setTools] = useState([]);




    useEffect(() => {

        const fetchLogos = fetch('data/Logos.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );

        fetchLogos.then(response => {
            return response.json();
        }).then(myJson => {


            setLogoList(myJson['Data'])

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

                        <PageHeader title={'Car Brands'} color={'bg-blue'} />


                        <div className='px-5 my-4 '>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                                {logoList.map(logo => (
                                    <Card logo={logo} />
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