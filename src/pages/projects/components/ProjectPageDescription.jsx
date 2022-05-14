import React, { Fragment } from 'react';
import { returnLinkComponentGivenGithubLink, returnLinkComponentGivenProjectLink } from '../../../common/LinkButtons';

import Tools from '../../../common/Tools';

function ProjectPageDescription({ project }) {
  const {
    author, scale, description, tools, githublink, projectlink,
  } = project;

  return (
    <>
      <p className="font-bold">Author:</p>
      <p className="highlight my-2 mb-4">{author}</p>
      <p className="font-bold">Project Scale:</p>
      <p className="my-2 mb-4">{scale}</p>
      <p className="font-bold">Description:</p>
      <p className="my-2 mb-4">{description}</p>
      <p className="font-bold ">Tools:</p>
      <div className="flex my-2">
        <Tools tools={tools} iconSize="w-12" />
      </div>

      {
        returnLinkComponentGivenGithubLink(githublink)
      }

      {
        returnLinkComponentGivenProjectLink(projectlink)
      }
    </>
  );
}

export default React.memo(ProjectPageDescription);
