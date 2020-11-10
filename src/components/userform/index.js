import { Form, Input } from 'antd'
import { userCardConstants } from '../../utils/constants'

const UserForm = ({ selectedUser, form }) => {
  return (
    <Form
      name='basic'
      initialValues={selectedUser}
      form={form}
      layout='vertical'
    >
      <Form.Item
        label={userCardConstants.form.name.label}
        name='name'
        rules={[
          { required: true, message: userCardConstants.form.name.message }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={userCardConstants.form.email.label}
        name='email'
        rules={[
          {
            type: `email`,
            required: true,
            message: userCardConstants.form.email.message
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={userCardConstants.form.phone.label}
        name='phone'
        rules={[
          { required: true, message: userCardConstants.form.phone.message }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={userCardConstants.form.website.label}
        name='website'
        rules={[
          { required: true, message: userCardConstants.form.website.message }
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}

export default UserForm
