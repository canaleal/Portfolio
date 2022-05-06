/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-spread */

const splitLinkBySlash = (link) => link.split('/');

const addStringAfterLastSlash = (link, string) => {
  const splittedLink = splitLinkBySlash(link);
  const lastIndex = splittedLink.length - 2;
  splittedLink[lastIndex] = `${splittedLink[lastIndex]}${string}`;
  return splittedLink.join('/');
};

export const addRawToImagePath = (imagePath) => {
  const link = addStringAfterLastSlash(imagePath, '/raw');
  return link;
};
