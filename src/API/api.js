import axios from 'axios'

const URL = 'https://be-project-reactjs.vercel.app/api/v1/'
const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance


// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`
//         }
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )