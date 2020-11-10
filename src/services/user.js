import axios from 'axios'

export const getUsers = url => {
  return axios
    .get(url)
    .then(response => {
      return {
        err: false,
        data: response.data
      }
    })
    .catch(err => {
      return {
        err: true,
        message: err.message
      }
    })
}
