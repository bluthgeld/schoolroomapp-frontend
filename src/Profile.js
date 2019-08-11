import React, { Component } from 'react'
import ProfileCard from './ProfileCard.js'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'

class Profile extends Component {

  constructor() {
    super()

    this.state = {
      profileData: [],
      studentData: [],
      educatorData: [],
      carerData: [],
      testData: []
    }
  }


  componentDidMount() {
  fetch('http://localhost:3000/carers/11')
  .then(res => res.json())
  .then(profileData => {
    this.userData(profileData)
    this.studentData()
  })
}

  userData = (user) => {
    let data = []
    let u = {}
    u.id = user.id
    u.first_name = user.first_name
    u.last_name = user.last_name
    u.picture = user.picture
    u.phone = user.phone
    u.email = user.email
    u.comm_pref = user.comm_pref
    data.push(u)
    this.setState( {testData: data} )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
test
          </div>
          <div className="col-md-8">
            <h4>Your Kids</h4>
            {this.state.studentData.map(studentObj => <StudentCard
              studentObj={studentObj}
              key={studentObj.id}
              />)}
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
// <ProfileCard profileData={this.state.profileData} />

// this.setState({
//   profileData: profileData,
//   studentData: profileData.students
// })
