import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  HeartFilled
} from '@ant-design/icons'

import {
  CardMain,
  CardImageCoverHeader,
  CardImageCoverHeaderImage,
  CardBodyUserFullName,
  CardBodyContactContiner,
  CardBodyContactInfo,
  CardActionButton
} from './styles'

const Card = ({
  singleUser,
  allUsers,
  setAllUsers,
  setSelectedUser,
  setShowModal
}) => {
  return (
    <CardMain
      bordered
      cover={
        <CardImageCoverHeader>
          <CardImageCoverHeaderImage
            src={`https://avatars.dicebear.com/v2/avataaars/${singleUser.username}.svg?options[mood][]=happy`}
            alt={`Avatar - ${singleUser.name}`}
          />
        </CardImageCoverHeader>
      }
      actions={[
        <CardActionButton
          onClick={() => {
            setAllUsers(
              allUsers.map(singleValue => {
                if (singleUser.id === singleValue.id) {
                  singleValue.favored = !singleValue.favored
                }
                return singleValue
              })
            )
          }}
        >
          {singleUser.favored ? (
            <HeartFilled
              style={{ fontSize: `20px`, color: `rgb(255, 0, 0)` }}
            />
          ) : (
            <HeartOutlined
              style={{ fontSize: `20px`, color: `rgb(255, 0, 0)` }}
            />
          )}
        </CardActionButton>,
        <CardActionButton>
          <EditOutlined
            style={{ fontSize: `20px` }}
            onClick={() => {
              setSelectedUser(singleUser)
              setShowModal(true)
            }}
          />
        </CardActionButton>,
        <CardActionButton
          onClick={() => {
            setAllUsers(
              allUsers.filter(singleValue => singleUser.id !== singleValue.id)
            )
          }}
        >
          <DeleteFilled style={{ fontSize: `20px` }} />
        </CardActionButton>
      ]}
    >
      <CardBodyUserFullName>{singleUser.name}</CardBodyUserFullName>
      <CardBodyContactContiner>
        <MailOutlined style={{ fontSize: `18px` }} />
        <CardBodyContactInfo>{singleUser.email}</CardBodyContactInfo>
      </CardBodyContactContiner>
      <CardBodyContactContiner>
        <PhoneOutlined style={{ fontSize: `18px` }} />
        <CardBodyContactInfo>{singleUser.phone}</CardBodyContactInfo>
      </CardBodyContactContiner>
      <CardBodyContactContiner>
        <GlobalOutlined style={{ fontSize: `18px` }} />
        <CardBodyContactInfo>{singleUser.website}</CardBodyContactInfo>
      </CardBodyContactContiner>
    </CardMain>
  )
}
export default Card
