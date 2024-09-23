import axios from 'axios'


const URL = "http://localhost:3000/"
const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }


})


export default instance;
