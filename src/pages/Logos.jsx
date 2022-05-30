/* eslint-disable no-nested-ternary */
import React from 'react';
import PageHeader from 'components/PageHeader';
import { Global } from 'constants';
import { useFetch } from 'hooks/fetch-hook';
import LogoCard from 'components/logos/LogoCard';
import GridLayout from 'layouts/GridLayout';
import Error from './Error';

function Logos() {
  const { data, error, isLoaded } = useFetch(Global.LOGOS_URL);

  return (
    <section>

      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Car Brands" color="bg-blue" />

            <GridLayout id="logos" columns="8">
              {data.map((logoElement) => (
                <LogoCard key={logoElement.name} logoElement={logoElement} />
              ))}
            </GridLayout>

          </>
        )
        : <p />}

    </section>
  );
}

export default React.memo(Logos);
