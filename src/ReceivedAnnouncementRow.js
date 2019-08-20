import React from 'react'
import {Route, Link, withRouter} from 'react-router-dom'


const ReceivedAnnouncementRow = (props) => {
  return (
    <tr>
      <th scope="col">Medium</th>
      <th scope="col">{props.announcement.initiator.first_name} {props.announcement.initiator.last_name}</th>
      <th scope="col"><Link to={`/carer/${props.user.username}/pa/${props.announcement.id}`}>{props.announcement.subject}</Link></th>
      <th scope="col">{props.announcement.created_at}</th>
      <th scope="col">{props.announcement.messages.length}</th>
    </tr>
  )
}

export default withRouter(ReceivedAnnouncementRow)
