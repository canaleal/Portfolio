/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../common/Footer';
import PageHeader from '../../common/PageHeader';
import { addRawToImagePath } from '../../helpers/ImageLinks';
import { getDataUsingFetch } from '../../services/FetchingData';
import ProjectDescription from './components/ProjectDescription';

import { Constants } from '../../constants/Constants';

function ProjectsId() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});

  async function getData() {
    try {
      const projectsJson = await getDataUsingFetch(Constants.PROJECTS_URL);

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
    <div className="main">

      {isLoaded

        ? error
          ? <p>Error! Project does not exist.</p>

          : (
            <div className="h-full w-full flex flex-col">

              <PageHeader title={project.title} color="bg-blue" />

              <div className="px-5 my-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl ">
                  <div className="col-span-2">
                    <img height="100" width="auto" src={`${addRawToImagePath(project.imglink)}`} alt={`${project.title}`} className="card card-4xl" loading="lazy" />
                  </div>

                  <div className="col-span-2 p-4 ">
                    <ProjectDescription project={project} />
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          )

        : <p />}

    </div>
  );
}

export default React.memo(ProjectsId);
