/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from 'components/PageHeader';
import { addRawToImagePath } from 'util/add-raw-link';
import { getDataUsingFetch } from 'services/fetch-data';
import { Global } from 'constants';
import SmallGridLayout from 'layouts/SmallGridLayout';

import ProjectDescription from './components/ProjectDescription';

function ProjectsId() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});

  async function getData() {
    try {
      const projectsJson = await getDataUsingFetch(Global.PROJECTS_URL);

      const projectElement = projectsJson.find((item) => item.id === parseInt(id, 10));

      if (projectElement) {
        setProject(projectElement);
      } else {
        throw new Error('Project is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();

    return () => { setProject({}); };
  }, []);

  return (
    <section>

      {error === true
        ? <p>Error! Project does not exist.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title={project.title} color="bg-blue" />

            <SmallGridLayout>
              <div className="col-span-2">
                <img height="100" width="auto" src={`${addRawToImagePath(project.imglink)}`} alt={`${project.title}`} className="img-card img-card-4xl" loading="lazy" />
              </div>

              <div className="col-span-2 p-4 ">
                <ProjectDescription project={project} />
              </div>
            </SmallGridLayout>

          </>
        )

        : <p />}

    </section>
  );
}

export default React.memo(ProjectsId);
