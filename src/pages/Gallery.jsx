/* eslint-disable no-nested-ternary */
import React from 'react';

import AttentionBar from 'components/AttentionBar';
import PageHeader from 'components/PageHeader';
import GridLayout from 'layouts/GridLayout';
import { Global } from 'constants';
import GalleryCard from 'components/gallery/GalleryCard';
import { useFetch } from 'hooks/fetch-hook';
import Error from './Error';

function Gallery() {
  const { data, error, isLoaded } = useFetch(Global.GALLERY_URL);

  return (
    <section>

      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Gallery" color="bg-green" zHeight="z-10" />

            <AttentionBar message="This page contains my work, as well as my favorite pieces from other artists." />

            <GridLayout id="gallery" columns=" md:grid-cols-3">
              {data.map((artElement) => (
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
