import { Modal, Form } from 'antd'
import UserForm from '../userform'
import { userCardConstants } from '../../utils/constants'

const UserModal = ({
  showModal,
  selectedUser,
  allUsers,
  setShowModal,
  setAllUsers,
  editUserAction
}) => {
  const [form] = Form.useForm()
  return (
    <Modal
      title={userCardConstants.modalTitle}
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
            editUserAction({
              ...selectedUser,
              name: values.name,
              email: values.email,
              phone: values.phone,
              website: values.website
            })
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
        <UserForm selectedUser={selectedUser} form={form} />
      )}
    </Modal>
  )
}
export default UserModal
