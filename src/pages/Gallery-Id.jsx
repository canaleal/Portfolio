/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from 'components/PageHeader';
import { addRawToImagePath } from 'util/add-raw-link';
import SmallGridLayout from 'layouts/SmallGridLayout';
import GalleryDescription from 'components/gallery/GalleryDescription';
import { useFetchWithFilter } from 'hooks/fetch-hook';
import { Global } from 'constants';

function GalleryId() {
  const { id } = useParams();
  const { data, error, isLoaded } = useFetchWithFilter(Global.GALLERY_URL, id);

  return (
    <section>

      {error === true
        ? <p>Error! Art does not exist.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title={data.title} color="bg-green" />

            <SmallGridLayout>
              <div className="col-span-2">
                <img height="100" width="auto" src={`${addRawToImagePath(data.imglink)}`} alt="" className="img-card img-card-4xl" loading="lazy" />
              </div>

              <div className="col-span-2 p-4">
                <GalleryDescription art={data} />
              </div>
            </SmallGridLayout>
          </>

        )

        : <p />}

    </section>
  );
}

export default React.memo(GalleryId);
