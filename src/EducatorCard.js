import React from 'react'

const EducatorCard = (props) => {
  return (

    <div className="card">
    <img src={props.educatorObj.picture} alt='...' className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.educatorObj.first_name} {props.educatorObj.last_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Role: {props.educatorObj.educator_type}</li>
        <li className="list-group-item">Phone: {props.educatorObj.phone}</li>
        <li className="list-group-item">Email: {props.educatorObj.email}</li>
      </ul>
    </div>
  )
}

export default EducatorCard
