import React, { Fragment, Component } from 'react'
import {withRouter} from 'react-router-dom'
import EducatorCard from './EducatorCard.js'
import StudentCard from './StudentCard.js'
import ScheduleRowCard from './ScheduleRowCard.js'
import CarerCard from './CarerCard.js'

class StudentContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      student: [],
      sections: [],
      educators: [],
      carers: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/students/1`)
  .then(res => res.json())
  .then(student => {
    debugger
    this.setState({
      student: student,
      sections: student.sections,
      carers: student.carers
    })
  })
}

  render() {
    return (
      <Fragment>

        <div className="card w-50">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.state.student.picture} className="card-img" style={{width: "200px"}} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.student.first_name} {this.state.student.last_name}</h5>
                <p className="card-text">Student Number: {this.state.student.student_number}</p>
                <p className="card-text">DOB: {this.state.student.dob} </p>
                <p className="card-text">Start Date:  {this.state.student.start_date}</p>
              </div>
            </div>
          </div>
        </div>


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
          {this.state.sections.map(schedule => <ScheduleRowCard
            schedule={schedule}
            key={schedule.id}
            />)}
        </tbody>
      </table>


      <h3>Educators</h3>


      <h3>Family</h3>


      </Fragment>

    )
  }
}

export default withRouter(StudentContainer)

// <p className="card-text">Room: {this.state.classroom.room.name} {this.state.classroom.room.room_number}</p>
