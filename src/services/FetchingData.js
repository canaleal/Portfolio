import axios from 'axios';


// Fetching data from the API
export const getDataUsingFetch = async (url) => {

    return axios.get(url)
        .then(res => {
            return res.data['Data']
        })
}


// Fetching data from the API and filtering the projects by the category
export const fetchDataUsingAxiosAndFilter = async (url) => {

    return axios.get(url)
        .then(res => {
            return res.data['Data']
        })
        .then(data => {
            return data.filter(item => item['isDisable'] === false)
        })
}
