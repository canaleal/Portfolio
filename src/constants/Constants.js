/* eslint-disable import/prefer-default-export */
function getFullWindowPath() {
  return `${window.location.protocol}//${window.location.host}`;
}

export const Constants = {
  PROJECTS_URL: `${getFullWindowPath()}/data/Projects.json`,
  GALLERY_URL: `${getFullWindowPath()}/data/Art.json`,
  WORK_URL: `${getFullWindowPath()}/data/Work.json`,
  EDUCATION_URL: `${getFullWindowPath()}/data/Education.json`,
  LOGOS_URL: `${getFullWindowPath()}/data/Logos.json`,
};
