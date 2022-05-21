import React from 'react';

import { Link } from 'react-router-dom';
import { returnLinkComponentGivenGithubLink, returnLinkComponentGivenProjectLink } from '../../../common/LinkButtons';

import Tools from '../../../common/Tools';

function ProjectCard({ projectElement }) {
  const {
    id, title, description, tools, githublink, imglink, scale, projectlink,
  } = projectElement;

  return (

    <div className="card col-span-1 shadow-xl">

      <div className="flex flex-col">
        <Link to={{ pathname: `/projects/${id}` }} aria-label={title}>

          <img height="100" width="auto" src={`${imglink}`} alt={`${title}`} className="img-card img-card-md" loading="lazy" />
        </Link>

        <div className="p-4">
          <p className="font-bold my-2">
            {title}
            {' '}
          </p>
          <p className="text-sm my-2">
            {scale}
            {' '}
            Sized Project
          </p>
          <div className="flex my-2">
            <Tools tools={tools} />

          </div>

          <div className="ellipsis">
            <p className="my-2 ">{description}</p>
          </div>

          <Link to={{ pathname: `/projects/${id}` }} className="card-btn my-2 rounded-lg mt-4" aria-label={title}>More</Link>

          {
            returnLinkComponentGivenGithubLink(githublink)
          }

          {
            returnLinkComponentGivenProjectLink(projectlink)
          }

        </div>
      </div>

    </div>
  );
}

export default React.memo(ProjectCard);
