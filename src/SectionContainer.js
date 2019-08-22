import React, { Fragment, Component } from 'react'
import {withRouter} from 'react-router-dom'
import EducatorCard from './EducatorCard.js'
import StudentCard from './StudentCard.js'

class SectionContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      classroom: [],
      room: [],
      educators: [],
      students: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/sections/${this.props.match.params.id}`)
  .then(res => res.json())
  .then(sections => {
    debugger
    this.setState({
      classroom: sections,
      room: sections.room,
      educators: sections.educators,
      students: sections.students
    })
  })
}

  render() {
    return (
      <div className="container-fluid px-4 py-4">
      <div className="card w-50 mx-auto">
        <div className="card-body">
          <h5 className="card-title">{this.state.classroom.name}</h5>
          <p className="card-text">{this.state.classroom.description}</p>
          <p className="card-text">Hours {this.state.classroom.start_hour} to {this.state.classroom.end_hour}</p>
          <p className="card-text">Room {this.state.room.name} {this.state.room.room_number}</p>
        </div>
      </div>

      <div className="w-75 mx-auto">
      <h3 className="mt-4 mb-3">Educators</h3>
      <div className="card-columns">
      {this.state.educators.map(educatorObj => <EducatorCard
        educatorObj={educatorObj}
        key={educatorObj.first_name}
        />)}
      </div>
      <h3 className="mt-4 mb-3">The Students</h3>
      <div className="card-columns">
      {this.state.students.map(studentObj => <StudentCard
        studentObj={studentObj}
        key={studentObj.id}
        />)}
      </div>
    </div>
    </div>

    )
  }
}

export default withRouter(SectionContainer)

// <p className="card-text">Room: {this.state.classroom.room.name} {this.state.classroom.room.room_number}</p>
