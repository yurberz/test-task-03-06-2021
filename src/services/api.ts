import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const fetchCountries = () => {
    return axios.get('/summary')
        .then(res => res?.data)
        .catch(err => {
            throw new Error(err)
        })
}