import axios from 'axios'

export const getUsers = url => {
  return axios
    .get(url)
    .then(response => {
      return response.data
    })
    .catch(err => {
      return []
    })
}
