import { useState, useEffect } from 'react'
import UserCards from './components/usercards'
import {getUsers} from './services/user'
import { Row } from 'antd'
import Spinner from 'react-spinkit'
import './App.css'

function App () {
  const url = process.env.REACT_APP_BACKEND_API_URL + '/users'
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers(url).then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [url])

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
