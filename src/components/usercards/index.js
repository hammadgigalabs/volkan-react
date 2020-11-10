import React, { useState } from 'react'
import { Modal, Form, Input } from 'antd'
import Card from './card'

import {
  AntCol
} from './styles'

const UserCards = ({
  users
}) => {
  const [form] = Form.useForm()
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
      <Modal
        title={`Edit User`}
        visible={showModal}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              setAllUsers(
                allUsers.map(singleValue => {
                  if (singleValue.id === selectedUser.id) {
                    return {
                      ...singleValue,
                      name: values.name,
                      email: values.email,
                      phone: values.phone,
                      website: values.website
                    }
                  }
                  return singleValue
                })
              )
              setShowModal(false)
            })
            .catch(info => {
              console.log('Validate Failed:', info)
            })
        }}
        onCancel={() => {
          setShowModal(false)
        }}
      >
        {Object.keys(selectedUser).length && (
          <Form
            name='basic'
            initialValues={selectedUser}
            form={form}
            layout='vertical'
          >
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  type: `email`,
                  required: true,
                  message: 'Please input your email!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Phone'
              name='phone'
              rules={[{ required: true, message: 'Please input your phone!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Website'
              name='website'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </React.Fragment>
  )
}
export default UserCards
