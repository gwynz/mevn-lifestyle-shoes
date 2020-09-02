import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://gwz-easy.herokuapp.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default Api