import axios from 'axios'

const URL = 'https://be-project-reactjs.vercel.app/api/v1/'
const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export default axiosInstance

