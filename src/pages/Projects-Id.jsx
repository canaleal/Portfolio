/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from 'components/PageHeader';
import { addRawToImagePath } from 'util/add-raw-link';
import GridLayout from 'layouts/GridLayout';
import ProjectDescription from 'components/projects/ProjectDescription';
import { useFetchWithFilter } from 'hooks/fetch-hook';
import { Global } from 'constants';
import Error from './Error';

function ProjectsId() {
  const { id } = useParams();
  const { data, error, isLoaded } = useFetchWithFilter(Global.PROJECTS_URL, id);

  return (
    <section>

      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title={data.title} color="bg-blue" />

            <GridLayout id={id} columns="4">
              <div className="col-span-2">
                <img height="100" width="auto" src={`${addRawToImagePath(data.imglink)}`} alt={`${data.title}`} className="img-card img-card-4xl" />
              </div>

              <div className="col-span-2 p-4 ">
                <ProjectDescription project={data} />
              </div>
            </GridLayout>

          </>
        )

        : <p />}

    </section>
  );
}

export default React.memo(ProjectsId);
