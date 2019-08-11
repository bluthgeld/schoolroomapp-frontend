import React from 'react'

const CarerCard = (props) => {
    return (

        <div className="card">
        <img src={props.carerObj.carer.picture} alt='{props.studentObj.first_name} {props.studentObj.last_name}' className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.carerObj.carer.first_name} {props.carerObj.carer.last_name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Role: {props.carerObj.fam}</li>
            <li className="list-group-item">Phone: {props.carerObj.carer.phone}</li>
            <li className="list-group-item">Email: {props.carerObj.carer.email}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">See Schedule</a>
          </div>
        </div>

    )
}

export default CarerCard
