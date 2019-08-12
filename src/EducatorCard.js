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
        <li className="list-group-item">Class Name: {props.educatorObj.room_name}</li>
        <li className="list-group-item">Room Number: {props.educatorObj.room_number}</li>
        <li className="list-group-item">Class Hours: {props.educatorObj.hours}</li>
        <li className="list-group-item">Academic Year: {props.educatorObj.school_year}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">See Class Roster</a>
      </div>
    </div>
  )
}

export default EducatorCard
