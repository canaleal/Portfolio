/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PageHeader from 'components/PageHeader';
import GridLayout from 'layouts/GridLayout';
import AttentionBar from 'components/AttentionBar';
import { Global } from 'constants';
import ProjectCard from 'components/projects/ProjectCard';
import { useFetch } from 'hooks/fetch-hook';
import Error from './Error';

function Projects() {
  const { data, error, isLoaded } = useFetch(Global.PROJECTS_URL);

  return (
    <section>

      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Projects" color="bg-blue" />

            <AttentionBar message="This page contains my Github projects. Both complete, and currently in development." />

            <GridLayout id="projects" columns="3">
              {data.map((projectElement) => (
                <ProjectCard key={projectElement.id} projectElement={projectElement} />
              ))}
            </GridLayout>

          </>
        )
        : <p />}

    </section>
  );
}

export default React.memo(Projects);
