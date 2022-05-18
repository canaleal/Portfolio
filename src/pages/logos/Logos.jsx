/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import Footer from '../../common/Footer';
import PageHeader from '../../common/PageHeader';
import { getDataUsingFetch } from '../../services/FetchingData';

import LogoCard from './components/LogoCard';

import { Constants } from '../../constants/Constants';

function Logos() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoList, setLogoList] = useState([]);

  async function getData() {
    try {
      const logoJson = await getDataUsingFetch(Constants.LOGOS_URL);

      if (logoJson && logoJson.length > 0) {
        setLogoList(logoJson);
      } else {
        throw new Error('Logo list is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { setLogoList([]); };
  }, []);

  return (
    <div className="main ">

      {isLoaded

        ? error
          ? <p>Error! Unable to load logos.</p>
          : (
            <div className="h-full w-full flex flex-col">

              <PageHeader title="Car Brands" color="bg-blue" />

              <div className="px-5 my-4 ">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {logoList.map((logoElement) => (
                    <LogoCard key={logoElement.name} logoElement={logoElement} />
                  ))}
                </div>

              </div>

              <Footer />

            </div>
          )
        : <p />}

    </div>
  );
}

export default React.memo(Logos);
