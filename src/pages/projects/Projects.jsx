/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import { filterDataIfPropertyIsFalse } from 'util/filter-tools-list';
import PageHeader from 'components/PageHeader';
import Footer from 'components/Footer';
import { getDataUsingFetch } from 'services/fetch-data';
import GridLayout from 'layouts/GridLayout';
import AttentionBar from 'components/AttentionBar';

import { Global } from 'constants';

import ProjectCard from './components/ProjectCard';

function Projects() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectsList, setProjectsList] = useState([]);

  async function getData() {
    try {
      const projectsJson = await getDataUsingFetch(Global.PROJECTS_URL);
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
    <section>

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
                <ProjectCard key={projectElement.id} projectElement={projectElement} />
              ))}
            </GridLayout>

            <Footer />

          </div>
        )
        : <p />}

    </section>
  );
}

export default React.memo(Projects);
