import React, { Component } from 'react'
import Nav from './Nav.js'
import ProfileCard from './ProfileCard.js'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'
import {Route} from 'react-router-dom'

class Profile extends Component {

  constructor(props) {
    super(props)

  }



  render() {
    return (
  <div>
    <Nav userId={this.props.userData.id} userName={this.props.userData.username} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            {this.props.userData.map(userObj => <ProfileCard
              userObj={userObj}
              key={userObj.id}
            />)}
          </div>
          <div className="col-lg-9">
            <h4>Your Kids</h4>
            {this.props.studentData.map(studentObj => <StudentCard
              studentObj={studentObj}
              key={studentObj.id}
              />)}
            <h4>Their Educators</h4>
              <div className="card-columns">
              {this.props.educatorData.map(educatorObj => <EducatorCard
                educatorObj={educatorObj}
                key={educatorObj.first_name}
                />)}
              </div>
            <h4>Our Family</h4>
              <div className="card-columns">
              {this.props.carerData.map(carerObj => <CarerCard
                carerObj={carerObj}
                key={carerObj.carer.id}
                />)}
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Profile
