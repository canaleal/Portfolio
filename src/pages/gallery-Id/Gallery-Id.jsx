/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../common/PageHeader';
import { addRawToImagePath } from '../../helpers/ImageLinks';
import SmallGridLayout from '../../layouts/SmallGridLayout';
import { getDataUsingFetch } from '../../services/FetchingData';
import GalleryDescription from './components/GalleryDescription';

function GalleryId() {
  const { id } = useParams();
  const [error, setError] = useState(false);
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
    <section>

      {error === true
        ? <p>Error! Art does not exist.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title={art.title} color="bg-green" />

            <SmallGridLayout>
              <div className="col-span-2">
                <img height="100" width="auto" src={`${addRawToImagePath(art.imglink)}`} alt="" className="card card-4xl" loading="lazy" />
              </div>

              <div className="col-span-2 p-4">
                <GalleryDescription art={art} />
              </div>
            </SmallGridLayout>
          </>

        )

        : <p />}

    </section>
  );
}

export default React.memo(GalleryId);
