import React from 'react'
import {Route, Link, withRouter} from 'react-router-dom'


const SentAnnouncementRow = (props) => {
  return (
    <tr>
      <th scope="col">Medium</th>
      <th scope="col">{props.announcement.receiver.first_name} {props.announcement.receiver.last_name}</th>
      <th scope="col"><Link to={`/${props.user.user_type}/${props.user.username}/pa/${props.announcement.id}`}>{props.announcement.subject}</Link></th>
      <th scope="col">{props.announcement.created_at}</th>
      <th scope="col">{props.announcement.messages.length}</th>
    </tr>
  )
}

export default withRouter(SentAnnouncementRow)
