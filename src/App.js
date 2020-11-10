import { useState } from 'react'
import UserCards from './components/usercards'
import axios from 'axios'
import { Row } from 'antd'
import Spinner from 'react-spinkit'
import './App.css'

function App () {
  const url = process.env.REACT_APP_BACKEND_API_URL + '/users'
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  axios
    .get(url)
    .then(response => {
      setUsers(response.data)
      setLoading(false)
    })
    .catch(err => setLoading(false))
  
  return (
    <Row>
      {loading ? (
        <Spinner
          name='cube-grid'
          style={{
            position: `absolute`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ) : (
        <UserCards users={users} />
      )}
    </Row>
  )
}

export default App
