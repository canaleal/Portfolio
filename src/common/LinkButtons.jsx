import React from 'react';
import { Link } from 'react-router-dom';

export const returnLinkComponentGivenGithubLink = (tempGithublink) => {
  if (tempGithublink !== 'null') {
    return <a href={tempGithublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 ml-2 rounded-lg">Code</a>;
  }

  return null;
};

export const returnLinkComponentGivenTitle = (tempTitle) => {
  switch (tempTitle) {
    case 'Automobile Logo API':
      return <Link to="/logos" className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</Link>;
    case 'Portfolio Website':
      return <Link to="/" className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</Link>;
    default:
      return null;
  }
};
