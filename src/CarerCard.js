import React from 'react'

const CarerCard = (props) => {
    return (

        <div className="card">
        <img src={props.carerObj.carer.picture} alt='...' className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.carerObj.carer.first_name} {props.carerObj.carer.last_name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Role: {props.carerObj.fam}</li>
            <li className="list-group-item">Phone: {props.carerObj.carer.phone}</li>
            <li className="list-group-item">Email: {props.carerObj.carer.email}</li>
          </ul>
        </div>

    )
}

export default CarerCard
