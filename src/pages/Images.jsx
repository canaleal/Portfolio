/* eslint-disable no-nested-ternary */
import React from 'react';

import AttentionBar from 'components/AttentionBar';
import PageHeader from 'components/PageHeader';
import GridLayout from 'layouts/GridLayout';
import { Global } from 'constants';
import { useFetch } from 'hooks/fetch-hook';
import ImageCard from 'components/ImageCard';
import Error from './Error';

function Gallery() {
  const { data, error, isLoaded } = useFetch(Global.IMAGES_URL);

  return (
    <section>

      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Web Getter Images" color="bg-green" zHeight="z-10" />
            <AttentionBar message="This page contains images collected from the Web Getter. Only a hand full of images are shown out of 26000." />
            <GridLayout id="images" columns=" md:grid-cols-8">
              {data.map((imageElement) => (
                <ImageCard
                  key={imageElement.id}
                  id={imageElement.id}
                  containerlink={imageElement.container_link}
                  imglink={imageElement.image_link}
                  title={imageElement.name}
                  isNsfw
                />
              ))}
            </GridLayout>
          </>
        )
        : <p />}
    </section>
  );
}

export default React.memo(Gallery);
