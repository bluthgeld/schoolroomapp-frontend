import React, { Component } from 'react'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'

class Profile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userData: []
    }
  }


  componentDidMount() {
  fetch('http://localhost:3000/carers/11')
  .then(res => res.json())
  .then(userData => {
    debugger
    this.setState({
      userData: userData,
    })
  })
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <div className="card" style={{ width: '20rem'}}>
          <img src={this.props.userData.picture} alt="Name Here" class="rounded mx-auto d-block rounded-circle" style={{width: '250px', height: '250px'}} />
            <div className="card-body">
              <h5 className="card-title">{this.props.userData.first_name} {this.props.userData.last_name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Phone: {this.props.userData.phone}</li>
              <li className="list-group-item">Email: {this.props.userData.email}</li>
              <li className="list-group-item">Announcement Preference: {this.props.userData.comm_pref}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Edit Profile</a>
              <a href="#" className="card-link">Delete Profile</a>
            </div>
            </div>
          </div>
          <div className="col-md-8">
            <h4>My Kids</h4>



            <h4>Their Educators</h4>
              <EducatorCard />
            <h4>My Family</h4>
              <CarerCard />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile


// <h2>This is a profile</h2>
// <StudentCard />
// <EducatorCard />
// <CarerCard />

// <div class="card-columns">
//   <div class="card">
//     <img src="..." class="card-img-top" alt="..." />
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>
