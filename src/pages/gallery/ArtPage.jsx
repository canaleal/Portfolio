/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../common/Footer';
import PageHeader from '../../common/PageHeader';
import { addRawToImagePath } from '../../helpers/ImageLinks';
import { getDataUsingFetch } from '../../services/FetchingData';
import Description from './components/ArtPageDescription';

function ArtPage() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [art, setArt] = useState({});

  async function getData() {
    try {
      const artJson = await getDataUsingFetch('../data/Art.json');

      const artElement = artJson.find((item) => item.id === parseInt(id, 10));

      if (artElement) {
        setArt(artElement);
      } else {
        throw new Error('Art is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { setArt({}); };
  }, []);

  return (
    <div className="main">

      {isLoaded

        ? error
          ? <p>Error! Art does not exist.</p>

          : (
            <div className="h-full w-full flex flex-col ">

              <PageHeader title={art.title} color="bg-green" />

              <div className="px-5 my-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl ">
                  <div className="col-span-2">
                    <img height="100" width="auto" src={`${addRawToImagePath(art.imglink)}`} alt="" className="card card-4xl" loading="lazy" />
                  </div>

                  <div className="col-span-2 p-4">
                    <Description art={art} />
                  </div>
                </div>
              </div>

              <Footer />

            </div>
          )

        : <p />}

    </div>
  );
}

export default React.memo(ArtPage);
