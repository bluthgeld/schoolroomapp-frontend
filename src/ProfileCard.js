import React from 'react'

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
      <li className="list-group-item">Announcement Preference: {props.userObj.comm_pref}</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Edit Profile</a>
      <a href="#" className="card-link">Delete Profile</a>
    </div>
  </div>

  )
}

export default ProfileCard