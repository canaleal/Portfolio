/* eslint-disable no-nested-ternary */
import React from 'react';
import PageHeader from 'components/PageHeader';
import { Global } from 'constants';
import { useFetch } from 'hooks/fetch-hook';
import LogoCard from 'components/logos/LogoCard';

function Logos() {
  const { data, error, isLoaded } = useFetch(Global.LOGOS_URL);

  return (
    <section>

      {error === true
        ? <p>Error! Logos do not exist.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Car Brands" color="bg-blue" />

            <div className="px-5 my-4 ">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {data.map((logoElement) => (
                  <LogoCard key={logoElement.name} logoElement={logoElement} />
                ))}
              </div>

            </div>

          </>
        )
        : <p />}

    </section>
  );
}

export default React.memo(Logos);
