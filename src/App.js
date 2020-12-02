import React, { useState, useEffect } from 'react'
import UserCards from './components/usercards'
import { getUsers } from './services/user'
import { Row, Alert } from 'antd'
import Spinner from 'react-spinkit'
import './App.css'

function App () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getUsers().then(result => {
      if (result.err) {
        setShowError(true)
        setErrorMessage(result.message)
      } else {
        if (result.data && result.data.length) {
          setUsers(result.data)
        } else {
          setShowError(true)
          setErrorMessage('No users found.')
        }
      }
      setLoading(false)
    })
  }, [])

  return (
    <React.Fragment>
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
      {showError && (
        <Alert
          message='Error'
          description={errorMessage}
          type='error'
          showIcon
        />
      )}
    </React.Fragment>
  )
}

export default App
