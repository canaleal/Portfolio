


import React from 'react'

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Card from './components/GridCard';

const AboutPage = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [workList, setWorkList] = useState([]);
    const [educationList, setEducationList] = useState([]);


    
    const getWorkList = async () => {
        return fetch('data/Work.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => { return responseJson['Data'] });
    }

    const getEducationList = async () => {
        return fetch('data/Education.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => { return responseJson['Data'] });
    }

    
    async function getData(){

        try{
            const work = await getWorkList();
            const education = await getEducationList();
            setWorkList(work);
            setEducationList(education);
            setIsLoaded(true);
        }
        catch{
            setError(true);
            setIsLoaded(true);
        }
      
    }

    useEffect(() => {


        getData();

        return () => { setIsLoaded(false) };

    }, []);


   

    return (
        <div className="main ">
            {isLoaded ?

                error ?
                    <p>Error! Unable to load work list.</p>
                    :
                    <div className='h-full w-full flex flex-col'>

                        <PageHeader title={'Work and Education'} color={'bg-gray-600'} />

                        <div className="grid  grid-cols-1 sm:grid-cols-5 gap-4 my-4 px-5">


                            {
                                workList.map((work) => {
                                    return (

                                        <Card key={work.id} work={work} />

                                    )
                                })
                            }

                        </div>

                        <hr></hr>

                        <div className="grid  grid-cols-1 sm:grid-cols-5 gap-4 my-4 px-5">


                            {
                                educationList.map((work) => {
                                    return (

                                        <Card key={work.id} work={work} />

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
    )
}

export default React.memo(AboutPage);