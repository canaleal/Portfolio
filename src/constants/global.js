function getFullWindowPath() {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
}

const Global = {
  PROJECTS_URL: `${getFullWindowPath()}/data/Projects.json`,
  GALLERY_URL: `${getFullWindowPath()}/data/Art.json`,
  WORK_URL: `${getFullWindowPath()}/data/Work.json`,
  EDUCATION_URL: `${getFullWindowPath()}/data/Education.json`,
  LOGOS_URL: `${getFullWindowPath()}/data/Logos.json`,
};

export default Global;
