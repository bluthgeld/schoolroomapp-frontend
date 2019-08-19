import React from 'react'

const EducatorCard = (props) => {
  return (
    <div className="card">
    <img src={props.educatorObj.picture} alt='{props.studentObj.first_name} {props.studentObj.last_name}' className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.educatorObj.first_name} {props.educatorObj.last_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.educatorObj.educator_type}</li>
        <li className="list-group-item">Class: {props.educatorObj.section_name}</li>
        <li className="list-group-item">{props.educatorObj.description}</li>
        <li className="list-group-item">Room: {props.educatorObj.room_name} {props.educatorObj.room_number}</li>
        <li className="list-group-item">Class Hours: {props.educatorObj.start_hour} to {props.educatorObj.end_hour}</li>
        <li className="list-group-item">Academic Year: {props.educatorObj.academic_year}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">See Class Roster</a>
      </div>
    </div>
  )
}

export default EducatorCard
