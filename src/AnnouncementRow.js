import React from 'react'
import {Route, Link} from 'react-router-dom'


const AnnouncementRowCard = (props) => {
  return (
    <tr>
      <th scope="col">Medium</th>
      <th scope="col">{props.announcement.initiator.first_name} {props.announcement.initiator.last_name}</th>
      <th scope="col"><Link to={`/profile/${props.user.username}/pa/a/${props.announcement.id}`}>{props.announcement.subject}</Link></th>
      <th scope="col">{props.announcement.created_at}</th>
      <th scope="col">{props.announcement.messages.length}</th>
    </tr>
  )
}

export default AnnouncementRowCard
