import React, { Component } from 'react'
import ProfileCard from './ProfileCard.js'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'
import {withRouter, Route} from 'react-router-dom'

class CarerProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      studentData: [],
      educatorData: [],
      carerData: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/carers/${this.props.currentUser.id}`)
  .then(res => res.json())
  .then(profileData => {
    this.studentData(profileData)
  })
}


  studentData = (data) => {
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
        if (carer.carer.id !== this.props.currentUser.id) {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <ProfileCard userObj={this.props.currentUser}/>
          </div>
          <div className="col-lg-9">
            <h4>Your Kids</h4>
            {this.state.studentData.map(studentObj => <StudentCard
              studentObj={studentObj}
              key={studentObj.id}
              />)}
            <h4>Their Educators</h4>
              <div className="card-columns">
              {this.state.educatorData.map(educatorObj => <EducatorCard
                educatorObj={educatorObj}
                key={educatorObj.first_name}
                />)}
              </div>
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

export default withRouter(CarerProfile)
