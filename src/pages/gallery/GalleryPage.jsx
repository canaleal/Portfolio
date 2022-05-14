/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import AttentionBar from '../../common/AttentionBar';
import Footer from '../../common/Footer';
import PageHeader from '../../common/PageHeader';
import GridLayout from '../../layouts/GridLayout';
import { getDataUsingFetch } from '../../services/FetchingData';

function GalleryPage() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [artList, setArtList] = useState([]);

  async function getData() {
    try {
      const artJson = await getDataUsingFetch('data/Art.json');

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
              {artList.map((art) => (
                <Link key={art.id} to={{ pathname: `/gallery/${art.id}` }} className={` col-span-${art.col_span} shadow-xl `}>
                  <img height="100" width="auto" src={`${art.imglink}`} alt={`${art.title}`} className={`card card-lg ${art.isNsfw ? 'blur' : ''}`} loading="lazy" />
                </Link>
              ))}
            </GridLayout>

            <Footer />
          </div>
        )
        : <p>Loading</p>}
    </div>
  );
}

export default React.memo(GalleryPage);
