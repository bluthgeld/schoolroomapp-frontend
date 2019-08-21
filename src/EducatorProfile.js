import React, { Component } from 'react'
import Nav from './Nav.js'
import ProfileCard from './ProfileCard.js'
import EducatorCard from './EducatorCard.js'
import ScheduleRowCard from './ScheduleRowCard.js'
import {withRouter, Route} from 'react-router-dom'

class EducatorProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      educatorSchedule: [],
      educatorData: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/educators/${this.props.currentUser.id}`)
  .then(res => res.json())
  .then(profileData => {

    this.setState({
      educatorSchedule: profileData.sections
    })
    this.educators(this.state.educatorSchedule)
  })
}

educators = (data) => {
  
  let educatorArray = []
  data.forEach(section => {
      section.educators.forEach(educator => {
      if (educator.id !== this.props.currentUser.id) {
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
           <ProfileCard userObj={this.props.currentUser} />
          </div>
          <div className="col-lg-9">
           <h4>Schedule</h4>
           <table className="table table-hover">
             <thead>
               <tr>
                <th scope="col">Class Name</th>
                <th scope="col">Room</th>
                <th scope="col">Description</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Academic Year</th>
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

export default withRouter(EducatorProfile)
