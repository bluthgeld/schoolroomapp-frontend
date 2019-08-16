import React from 'react'
import {Route, Link} from 'react-router-dom'


const ScheduleRowCard = (props) => {
  return (
    <tr>
      <th scope="col">{props.schedule.room.room_number}</th>
      <th scope="col">{props.schedule.room.name}</th>
      <th scope="col">{props.schedule.hours}</th>
      <th scope="col">{props.schedule.school_year}</th>

    </tr>
  )
}

export default ScheduleRowCard
