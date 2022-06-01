function getFullWindowPath() {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
}

export const Global = {
  PROJECTS_URL: `${getFullWindowPath()}/data/Projects.json`,
  GALLERY_URL: `${getFullWindowPath()}/data/Art.json`,
  LOGOS_URL: `${getFullWindowPath()}/data/Logos.json`,
  IMAGES_URL: `${getFullWindowPath()}/data/Images.json`,
};

export default Global;
