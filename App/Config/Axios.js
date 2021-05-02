import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/neo/rest/v1/neo/'
})

instance.interceptors.request.use(request => {
  return request
})

export default instance

export const API_KEY = 'AnsErOcBoVNPljowRD0Naf0Cs9gdcXWt0SqXaZCc'
