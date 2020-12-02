import React, { useState } from 'react'
import { Alert } from 'antd'
import Card from './card'
import UserModal from '../usermodal'
import { AntCol } from './styles'
import { updateUser } from '../../services/user'

const UserCards = ({ users }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const [allUsers, setAllUsers] = useState(users)

  const editUserAction = singleUser => {
    updateUser(singleUser)
  }
  

  return (
    <React.Fragment>
      {allUsers && allUsers.length ? (
        allUsers.map((singleUser, index) => (
          <AntCol key={index} xs={24} sm={24} md={8} lg={8} xl={6}>
            <Card
              singleUser={singleUser}
              setShowModal={setShowModal}
              setSelectedUser={setSelectedUser}
              setAllUsers={setAllUsers}
              allUsers={allUsers}
              editUserAction={editUserAction}
            />
          </AntCol>
        ))
      ) : (
        <Alert description={`No records found, please refresh`} type='warning' showIcon />
      )}
      <UserModal
        showModal={showModal}
        selectedUser={selectedUser}
        allUsers={allUsers}
        setShowModal={setShowModal}
        setAllUsers={setAllUsers}
        editUserAction={editUserAction}
      />
    </React.Fragment>
  )
}
export default UserCards
