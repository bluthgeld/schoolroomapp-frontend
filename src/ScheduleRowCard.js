import React from 'react'
import {withRouter, Route, Link} from 'react-router-dom'


const ScheduleRowCard = (props) => {
  return (
    <tr>
      <th scope="col"><Link to={`/section/${props.schedule.id}`}>{props.schedule.name}</Link></th>
      <th scope="col">{props.schedule.room.name } {props.schedule.room.room_number}</th>
      <th scope="col">{props.schedule.description}</th>
      <th scope="col">{props.schedule.start_hour}</th>
      <th scope="col">{props.schedule.end_hour}</th>
      <th scope="col">{props.schedule.academic_year}</th>

    </tr>
  )
}

export default withRouter(ScheduleRowCard)
