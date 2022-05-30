/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from 'components/PageHeader';
import { addRawToImagePath } from 'util/add-raw-link';
import SmallGridLayout from 'layouts/SmallGridLayout';
import ProjectDescription from 'components/projects/ProjectDescription';
import { useFetchWithFilter } from 'hooks/fetch-hook';
import { Global } from 'constants';

function ProjectsId() {
  const { id } = useParams();
  const { data, error, isLoaded } = useFetchWithFilter(Global.GALLERY_URL, id);

  return (
    <section>

      {error === true
        ? <p>Error! Project does not exist.</p>
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title={data.title} color="bg-blue" />

            <SmallGridLayout>
              <div className="col-span-2">
                <img height="100" width="auto" src={`${addRawToImagePath(data.imglink)}`} alt={`${data.title}`} className="img-card img-card-4xl" loading="lazy" />
              </div>

              <div className="col-span-2 p-4 ">
                <ProjectDescription project={data} />
              </div>
            </SmallGridLayout>

          </>
        )

        : <p />}

    </section>
  );
}

export default React.memo(ProjectsId);
