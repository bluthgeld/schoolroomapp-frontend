import React from 'react'

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
          <a href="#" className="card-link">See Schedule</a>
        </div>
        </div>

  )
}

export default StudentCard
