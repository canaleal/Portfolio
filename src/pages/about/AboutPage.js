


import React from 'react'

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { getDataUsingFetch } from '../../util/FetchingData';

import Card from './components/GridCard';

const AboutPage = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [workList, setWorkList] = useState([]);
    const [educationList, setEducationList] = useState([]);



    async function getData() {

        try {
            const work = await getDataUsingFetch('data/Work.json');
            const education = await getDataUsingFetch('data/Education.json');
            setWorkList(work);
            setEducationList(education);
            setIsLoaded(true);
        }
        catch {
            setError(true);
            setIsLoaded(true);
        }

    }

    useEffect(() => {


        getData();

        return () => { setEducationList([]); setWorkList([]); };

    }, []);




    return (
        <div className="main ">
            {isLoaded ?

                error ?
                    <p>Error! Unable to load work list.</p>
                    :
                    <div className='h-full w-full flex flex-col'>

                     

                        <PageHeader title={'Work Experience'} color={'bg-blue'} />

                        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-4 my-4 px-5">


                            {
                                workList.map((work) => {
                                    return (

                                        <Card key={work.id} work={work} />

                                    )
                                })
                            }

                        </div>



                        <PageHeader title={'Education and Certificates'} color={'bg-blue'} />

                        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-4 my-4 px-5">


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