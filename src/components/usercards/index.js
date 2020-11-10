import React, { useState } from 'react'
import Card from './card'
import UserModal from '../usermodal'
import { AntCol } from './styles'

const UserCards = ({ users }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const [allUsers, setAllUsers] = useState(users)

  return (
    <React.Fragment>
      {allUsers &&
        allUsers.map((singleUser, index) => (
          <AntCol key={index} xs={24} sm={24} md={8} lg={8} xl={6}>
            <Card
              singleUser={singleUser}
              setShowModal={setShowModal}
              setSelectedUser={setSelectedUser}
              setAllUsers={setAllUsers}
              allUsers={allUsers}
            />
          </AntCol>
        ))}
      <UserModal
        showModal={showModal}
        selectedUser={selectedUser}
        allUsers={allUsers}
        setShowModal={setShowModal}
        setAllUsers={setAllUsers}
      />
    </React.Fragment>
  )
}
export default UserCards
