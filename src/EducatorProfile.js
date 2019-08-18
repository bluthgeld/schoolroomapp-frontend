import React, { Component } from 'react'
import Nav from './Nav.js'
import ProfileCard from './ProfileCard.js'
import EducatorCard from './EducatorCard.js'
import ScheduleRowCard from './ScheduleRowCard.js'
import {Route} from 'react-router-dom'

class EducatorProfile extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: {},
      educatorSchedule: [],
      educatorData: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/educators/${this.props.currentUser.id}`)
  .then(res => res.json())
  .then(profileData => {
debugger
    this.setState({
      currentUser: profileData,
      educatorSchedule: profileData.educator_rooms
    })
    this.educators(this.state.educatorSchedule)
  })
}

educators = (data) => {
  let educatorArray = []
  data.forEach(room => {
    room.room.educators.forEach(educator => {
      if (educator.id !== this.state.currentUser.id) {
        educatorArray.push(educator)
      }
    })
  })
  this.setState({
    educatorData: educatorArray
  })
}


  render() {

    return (
      <div>
       <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
           <ProfileCard userObj={this.state.currentUser} />
          </div>
          <div className="col-lg-9">
           <h4>Schedule</h4>
           <table className="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Room #</th>
                 <th scope="col">Room Name</th>
                 <th scope="col">Hours</th>
                 <th scope="col">School Year</th>
               </tr>
             </thead>
             <tbody>
             {this.state.educatorSchedule.map(schedule => <ScheduleRowCard
               schedule={schedule}
               key={schedule.id}
               />)}
             </tbody>
           </table>
           <h4>My Education Team</h4>
           <div className="card-columns">

           {this.state.educatorData.map(educatorObj => <EducatorCard
             educatorObj={educatorObj}
             key={educatorObj.first_name}
             />)}

           </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default EducatorProfile
