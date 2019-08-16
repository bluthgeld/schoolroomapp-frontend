import React, { Component } from 'react'
import Home from './Home.js'
import Nav from './Nav.js'
import Profile from './Profile.js'
import Login from './Login.js'
import Register from './Register.js'
import PublicAddressContainer from './PublicAddressContainer'
import AnnouncementContainer from './AnnouncementContainer'
import CreateAnnouncement from './CreateAnnouncement'
import EducatorProfile from './EducatorProfile'
import {Route} from 'react-router-dom'


class AppCopy extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: {},
      user: "",
      userId: 0,
      userData: [],
      studentData: [],
      educatorData: [],
      carerData: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/carers/1`)
  .then(res => res.json())
  .then(profileData => {
    this.setState({
      currentUser: profileData
    })
    this.userData(profileData);
    this.studentProfile(profileData)
  })
}

updateCurrentUser = (user) => {
  this.setState({user})
}

  userData = (user) => {

    let data = []
    let u = {}
    u.id = user.id
    u.username = user.username
    u.first_name = user.first_name
    u.last_name = user.last_name
    u.picture = user.picture
    u.phone = user.phone
    u.email = user.email
    u.comm_pref = user.comm_pref
    data.push(u)
    this.setState({
      userId: user.id,
      userData: data
    })
  }


  studentProfile = (data) => {
    let studentArray = []
    let carersArray = []
    let educatorArray = []
    data.students.forEach(student => {
      let h = {}
      h.id = student.id
      h.first_name = student.first_name
      h.last_name = student.last_name
      h.nickname = student.nickname
      h.student_number = student.student_number
      h.picture = student.picture
      studentArray.push(h)
      student.student_carers.forEach(carer => {
        if (carer.carer.id !== this.state.userId) {
          carersArray.push(carer)
        }
      })
      student.student_rooms.forEach(room => {
        let hours = room.hours
        let school_year = room.school_year
        let room_name = room.room.name
        let room_number = room.room.room_number
        room.room.educators.forEach(educator => {
          educator.hours = hours
          educator.school_year = school_year
          educator.room_name = room_name
          educator.room_number = room_number
          educatorArray.push(educator)
        })
      })
    })
    this.setState({
      studentData: studentArray,
      carerData: carersArray,
      educatorData: educatorArray
    })
  }

  render() {
    return (
    <div>
      <Nav userData={this.state.currentUser} />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" render={routeProps => <Login updateCurrentUser={this.updateCurrentUser} />} />
      <Route exact path="/educator" component={EducatorProfile} />
      <Route exact path="/profile/:username" render={routeProps => <Profile userData={this.state.userData} studentData={this.state.studentData} educatorData={this.state.educatorData} carerData={this.state.carerData} />} />
      <Route exact path="/profile/:username/pa" render={routeProps => <PublicAddressContainer currentUser={this.state.currentUser} />} />
      <Route exact path="/profile/:username/pa/send_announcement" render={routeProps => <CreateAnnouncement userData={this.state.userData} />} />
      <Route exact path="/profile/:username/pa/a/:id" component={AnnouncementContainer} />
    </div>
    )
  }
}

export default AppCopy;
