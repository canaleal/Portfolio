

import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { getDataUsingFetch } from '../../services/FetchingData';
import Description from './components/ArtPageDescription';


const ArtPage = ({ }) => {

  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [art, setArt] = useState({});



  async function getData() {
    try {
      const artJson = await getDataUsingFetch('../data/Art.json');

      let artElement = artJson.find(item => item['id'] === parseInt(id));


      if (artElement) {
        setArt(artElement);
      }
      else {
        throw new Error('Art is empty')
      }
    }
    catch {
      setError(true);
    }
    finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { setArt({}) };
  }, []);



  return (
    <div className="main">

      {isLoaded ?

        error ?
          <p>Error! Art does not exist.</p>

          :
          <div className='h-full w-full flex flex-col '>

            <PageHeader title={art.title} color={'bg-green'} />

            <div className='px-5 my-4'>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4  bg-white shadow-xl ">

                <div className='col-span-2'>
              
                  <img height='100' width='auto' src={`${art.imglink}`} alt="" className='card card-4xl'  loading="lazy"/>
                </div>

                <div className='col-span-2 p-4'>
                  <Description art={art} />
                </div>

              </div>
            </div>


            <Footer />


          </div>

        :
        <p></p>
      }


    </div>
  )

}

export default React.memo(ArtPage); 