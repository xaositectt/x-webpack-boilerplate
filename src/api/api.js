import axios from 'axios'

let headers = {}

const apiClient = axios.create({
  baseURL: process.env.apiBaseUrl,
  timeout: 2000,
  headers: headers
})

const resource = (name) => {
  const get = (params) => {
    return apiClient.get(name, {params: params})
  }

  return {
    get
  }
}

export default resource

