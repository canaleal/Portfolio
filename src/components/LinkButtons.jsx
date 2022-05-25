import React from 'react';

export const returnLinkComponentGivenGithubLink = (tempGithublink) => {
  if (tempGithublink !== null) {
    return <a href={tempGithublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 ml-2 rounded-lg">Code</a>;
  }

  return null;
};

export const returnLinkComponentGivenProjectLink = (tempProjectlink) => {
  if (tempProjectlink !== null) {
    return <a href={tempProjectlink} className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</a>;
  }

  return null;
};
