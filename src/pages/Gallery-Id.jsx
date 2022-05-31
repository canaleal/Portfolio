/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from 'components/PageHeader';
import { addRawToImagePath } from 'util/add-raw-link';
import GalleryDescription from 'components/gallery/GalleryDescription';
import { useFetchWithFilter } from 'hooks/fetch-hook';
import { Global } from 'constants';
import GridLayout from 'layouts/GridLayout';
import Error from './Error';

function GalleryId() {
  const { id } = useParams();
  const { data, error, isLoaded } = useFetchWithFilter(Global.GALLERY_URL, id);

  return (
    <section>

      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title={data.title} color="bg-green" zHeight="z-10" />

            <GridLayout id={id} columns=" md:grid-cols-4">
              <div className="col-span-2">
                <img height="100" width="auto" src={`${addRawToImagePath(data.imglink)}`} alt="" className="img-card img-card-4xl" loading="lazy" />
              </div>

              <div className="col-span-2 p-4">
                <GalleryDescription art={data} />
              </div>
            </GridLayout>
          </>

        )

        : <p />}

    </section>
  );
}

export default React.memo(GalleryId);
