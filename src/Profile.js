import React, { Component } from 'react'
import ProfileCard from './ProfileCard.js'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'

class Profile extends Component {

  constructor() {
    super()

    this.state = {
      userId: 0,
      userData: [],
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
    this.userData(profileData);
    this.studentProfile(profileData)

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
    this.setState({
      userId: user.id,
      userData: data
    })
  }


  educatorProfile = (data) => {


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
        let e = {}
        e.hours = room.hours
        e.school_year = room.school_year
        e.room_name = room.room.name
        e.room_number = room.room.room_number
        e.educators = room.room.educators
        educatorArray.push(e)
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            {this.state.userData.map(userObj => <ProfileCard
              userObj={userObj}
              key={userObj.id}
            />)}
          </div>
          <div className="col-lg-9">
            <h4>Your Kids</h4>
            {this.state.studentData.map(studentObj => <StudentCard
              studentObj={studentObj}
              key={studentObj.id}
              />)}
            <h4>Their Educators</h4>
              <EducatorCard />
            <h4>Our Family</h4>
              <div className="card-columns">
              {this.state.carerData.map(carerObj => <CarerCard
                carerObj={carerObj}
                key={carerObj.carer.id}
                />)}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
