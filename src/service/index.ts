import axios from 'axios'

const api = axios.create({ baseURL: '' })

/*
 * Middleware before Request
 */
api.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

/*
 * Middleware after Request
 */
api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api
