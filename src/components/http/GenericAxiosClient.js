/**import axios from './axiosinstance'

class GenericAxiosClient {
  defaultConfig = { headers: { 'Content-type': 'Application/json' } }

  get = async (url) => {
    return await axios.get(url)
  }

  post = async (url, body) => {
    return await axios.post(url, body, this.defaultConfig)
  }

  put = async (url, body) => {
    return await axios.put(url, body, this.defaultConfig)
  }

  delete = async (url) => {
    return await axios.delete(url)
  }
}
const genericAxiosClient = new GenericAxiosClient()
export default {genericAxiosClient}*/
