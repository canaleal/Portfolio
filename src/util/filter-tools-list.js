/* eslint-disable prefer-spread */
export const getToolsList = (objectList, property) => {
  const list = [];
  for (let i = 0; i < objectList.length; i += 1) {
    list.push(objectList[i][property]);
  }

  const flat = [].concat.apply([], list);
  const unique = flat.filter((elem, pos) => flat.indexOf(elem) === pos);

  return unique;
};

export const filterDataIfPropertyIsFalse = (objectList, property) => {
  const list = [];
  for (let i = 0; i < objectList.length; i += 1) {
    if (objectList[i][property] === false) {
      list.push(objectList[i]);
    }
  }

  return list;
};
