import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_API_URL

export const getUsers = () => {
  const url = baseUrl + '/users'
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

export const updateUser = updateUser => {
  const url = `${baseUrl}/user/${updateUser.id}`
  return axios({
    method: 'put',
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      user: updateUser
    }
  })
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
