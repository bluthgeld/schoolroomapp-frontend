import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const StudentCard = (props) => {
  return (

      <div className="card" style={{ width: '18rem'}}>
      <img src={props.studentObj.picture} alt='{props.studentObj.first_name} {props.studentObj.last_name}' className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.studentObj.first_name} {props.studentObj.last_name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nickname: {props.studentObj.nickname}</li>
          <li className="list-group-item">Student Number: {props.studentObj.student_number}</li>
        </ul>
        <div className="card-body">
          <Link to={`/student/${props.studentObj.id}`} className="card-link">Schedule</Link>
        </div>
        </div>

  )
}

export default withRouter(StudentCard)
