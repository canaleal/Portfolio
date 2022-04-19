import axios from 'axios';

export const getDataUsingFetch = async (url) => {

    return axios.get(url)
        .then(res => {
            return res.data['Data']
        })
}

