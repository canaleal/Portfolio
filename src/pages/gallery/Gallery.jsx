/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import AttentionBar from '../../common/AttentionBar';
import Footer from '../../common/Footer';
import PageHeader from '../../common/PageHeader';
import GridLayout from '../../layouts/GridLayout';
import { getDataUsingFetch } from '../../services/FetchingData';
import GalleryCard from './components/GalleryCard';

import { Constants } from '../../constants/Constants';

function Gallery() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [artList, setArtList] = useState([]);

  async function getData() {
    try {
      const artJson = await getDataUsingFetch(Constants.GALLERY_URL);

      if (artJson && artJson.length > 0) {
        setArtList(artJson);
      } else {
        throw new Error('Art list is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { setArtList([]); };
  }, []);

  return (
    <div className="main ">

      {error === true
        ? <p>Error! Unable to load gallery list.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <div className="h-full w-full flex flex-col">

            <PageHeader title="Gallery" color="bg-green" />

            <AttentionBar message="This page contains my work, as well as my favorite pieces from other artists." />

            <GridLayout>
              {artList.map((artElement) => (
                <GalleryCard key={artElement.id} artElement={artElement} />
              ))}
            </GridLayout>

            <Footer />
          </div>
        )
        : <p>Loading</p>}
    </div>
  );
}

export default React.memo(Gallery);
