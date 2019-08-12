import React from 'react'


const AnnouncementRowCard = (props) => {
  return (

    <tr>
      <th scope="col">Medium</th>
      <th scope="col">{props.announcement.initiator.first_name} {props.announcement.initiator.last_name}</th>
      <th scope="col">{props.announcement.subject}</th>
      <th scope="col">{props.announcement.created_at}</th>
      <th scope="col">{props.announcement.messages.length}</th>
    </tr>

  )
}

export default AnnouncementRowCard
