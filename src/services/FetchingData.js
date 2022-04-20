import axios from 'axios';

export const getDataUsingFetch = async (url) => {

    return axios.get(url)
        .then(res => {
            return res.data['Data']
        })
}



export const fetchDataUsingAxiosAndFilter = async (url) => {

    return axios.get(url)
        .then(res => {
            return res.data['Data']
        })
        .then(data => {
            return data.filter(item => item['isDisable'] === false)
        })
}
