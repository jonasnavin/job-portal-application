import axios from "axios"

const API_URL = "https://job-portal-application-dkui.onrender.com/api"

const API = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

export default API