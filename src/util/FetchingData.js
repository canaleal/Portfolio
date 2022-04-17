export const getDataUsingFetch = async(url) => {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((responseJson) => { return responseJson['Data'] });
}