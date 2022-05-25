/* eslint-disable import/prefer-default-export */
function getFullWindowPath() {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
    // ✅ Can use window here
  }
  return null;
  // ⛔️ Don't use window here
}

export const Global = {
  PROJECTS_URL: `${getFullWindowPath()}/data/Projects.json`,
  GALLERY_URL: `${getFullWindowPath()}/data/Art.json`,
  WORK_URL: `${getFullWindowPath()}/data/Work.json`,
  EDUCATION_URL: `${getFullWindowPath()}/data/Education.json`,
  LOGOS_URL: `${getFullWindowPath()}/data/Logos.json`,
};