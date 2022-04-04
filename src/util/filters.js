
export const getToolsList = (objectList, property) => {


    let list = [];
    for (let i = 0; i < objectList.length; i++) {
        list.push(objectList[i][property]);
    }


    let flat = [].concat.apply([], list);
    let unique = flat.filter(function (elem, pos) {
        return flat.indexOf(elem) === pos;
    });

    return unique;
}

export const filterDataIfPropertyIsFalse = (objectList, property) => {

    
    let list = [];
    for (let i = 0; i < objectList.length; i++) {
        if (objectList[i][property] === false) {
            list.push(objectList[i]);
        }
    }

    return list;
}