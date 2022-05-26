/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import AttentionBar from 'components/AttentionBar';
import PageHeader from 'components/PageHeader';
import GridLayout from 'layouts/GridLayout';
import { getDataUsingFetch } from 'services/fetch-data';
import { Global } from 'constants';
import GalleryCard from 'components/gallery/GalleryCard';

function Gallery() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [artList, setArtList] = useState([]);

  async function getData() {
    try {
      const artJson = await getDataUsingFetch(Global.GALLERY_URL);

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
    <section>

      {error === true
        ? <p>Error! Unable to load gallery list.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Gallery" color="bg-green" />

            <AttentionBar message="This page contains my work, as well as my favorite pieces from other artists." />

            <GridLayout>
              {artList.map((artElement) => (
                <GalleryCard key={artElement.id} artElement={artElement} />
              ))}
            </GridLayout>

          </>
        )
        : <p />}
    </section>
  );
}

export default React.memo(Gallery);
