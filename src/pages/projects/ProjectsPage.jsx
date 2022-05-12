/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import Card from './components/ProjectCard';
import AboutCard from './components/AboutCard';
import { filterDataIfPropertyIsFalse } from '../../helpers/Filters';
import PageHeader from '../../common/PageHeader';
import Footer from '../../common/Footer';
import { getDataUsingFetch } from '../../services/FetchingData';

function ProjectsPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectsList, setProjectsList] = useState([]);
  // const [tools, setTools] = useState([]);

  const [workList, setWorkList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  async function getData() {
    try {
      const projectsJson = await getDataUsingFetch('data/Projects.json');
      const tempProjectList = filterDataIfPropertyIsFalse(projectsJson, 'isDisable');
      // const toolsList = getToolsList(projectsJson, 'tools');
      // setTools(toolsList);

      if (tempProjectList && tempProjectList.length > 0) {
        setProjectsList(tempProjectList);
      } else {
        throw new Error('Projects list is empty');
      }

      const work = await getDataUsingFetch('data/Work.json');
      const education = await getDataUsingFetch('data/Education.json');
      setWorkList(work);
      setEducationList(education);
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

      {isLoaded

        ? error
          ? <p>Error! Unable to load projects.</p>
          : (
            <div className="h-full w-full flex flex-col">

              <PageHeader title="Projects" color="bg-blue" />

              {/* <div className='bg-white rounded-lg px-5 shadow-lg my-4' >
                            <Tools tools={tools} />
                        </div> */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4 px-5">
                {projectsList.map((projectElement) => (
                  <Card key={projectElement.id} projectElement={projectElement} />
                ))}
              </div>

              <PageHeader title="Work Experience" color="bg-blue" />

              <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 my-4 px-5">

                { workList.map((aboutElement) => (
                  <AboutCard key={aboutElement.id} aboutElement={aboutElement} />
                ))}

              </div>

              <PageHeader title="Education and Certificates" color="bg-blue" />

              <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 my-4 px-5">

                { educationList.map((aboutElement) => (
                  <AboutCard key={aboutElement.id} aboutElement={aboutElement} />
                ))}

              </div>

              <Footer />

            </div>
          )
        : <p />}

    </div>
  );
}

export default React.memo(ProjectsPage);
