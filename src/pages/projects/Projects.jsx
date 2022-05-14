/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import Card from './components/ProjectCard';
import { filterDataIfPropertyIsFalse } from '../../helpers/Filters';
import PageHeader from '../../common/PageHeader';
import Footer from '../../common/Footer';
import { getDataUsingFetch } from '../../services/FetchingData';
import GridLayout from '../../layouts/GridLayout';
import AttentionBar from '../../common/AttentionBar';

function Projects() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectsList, setProjectsList] = useState([]);

  async function getData() {
    try {
      const projectsJson = await getDataUsingFetch('data/Projects.json');
      const tempProjectList = filterDataIfPropertyIsFalse(projectsJson, 'isDisable');

      if (tempProjectList && tempProjectList.length > 0) {
        setProjectsList(tempProjectList);
      } else {
        throw new Error('Projects list is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { };
  }, []);

  return (
    <div className="main " data-testid="main-page">

      {error === true
        ? <p>Error! Unable to load project list.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <div className="h-full w-full flex flex-col">

            <PageHeader title="Projects" color="bg-blue" />

            <AttentionBar message="This page contains my Github projects. Both complete, and currently in development." />

            <GridLayout>
              {projectsList.map((projectElement) => (
                <Card key={projectElement.id} projectElement={projectElement} />
              ))}
            </GridLayout>

            <Footer />

          </div>
        )
        : <p />}

    </div>
  );
}

export default React.memo(Projects);
