import React from 'react'
import {Route, Link, withRouter} from 'react-router-dom'

const ProfileCard = (props) => {
  return (

  <div className="card" style={{ width: '20rem'}}>
    <img src={props.userObj.picture} alt="Name Here" class="rounded mx-auto d-block rounded-circle" style={{width: '250px', height: '250px'}} />
    <div className="card-body">
      <h5 className="card-title">{props.userObj.first_name} {props.userObj.last_name}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Phone: {props.userObj.phone}</li>
      <li className="list-group-item">Email: {props.userObj.email}</li>
    </ul>
    <div className="card-body">
      <Link to={`/${props.userObj.user_type}/${props.userObj.username}/edit`} className="card-link">Edit</Link>
    </div>
  </div>

  )
}

export default ProfileCard
