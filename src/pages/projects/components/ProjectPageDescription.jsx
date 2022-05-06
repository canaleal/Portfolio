import React, { Fragment } from 'react';
import { returnLinkComponentGivenGithubLink, returnLinkComponentGivenTitle } from '../../../common/LinkButtons';

import Tools from '../../../common/Tools';

function ProjectPageDescription({ project }) {
  const {
    author, scale, title, description, tools, githublink,
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
        <Tools tools={tools} />
      </div>

      {
        returnLinkComponentGivenGithubLink(githublink)
      }

      {
        returnLinkComponentGivenTitle(title)
      }
    </>
  );
}

export default React.memo(ProjectPageDescription);
