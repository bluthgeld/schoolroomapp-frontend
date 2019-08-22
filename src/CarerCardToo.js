import React from 'react'

const CarerCardToo = (props) => {
    return (

        <div className="card">
        <img src={props.carerObj.picture} alt='...' className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.carerObj.first_name} {props.carerObj.last_name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Phone: {props.carerObj.phone}</li>
            <li className="list-group-item">Email: {props.carerObj.email}</li>
          </ul>
        </div>

    )
}

export default CarerCardToo
