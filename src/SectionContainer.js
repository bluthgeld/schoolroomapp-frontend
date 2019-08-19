import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class SectionContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      classroom: [],
      room: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/sections/1`)
  .then(res => res.json())
  .then(sections => {
    this.setState({
      classroom: sections,
      room: sections.room
    })
  })
  debugger
}

  render() {
    return (

      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{this.state.classroom.name}</h5>
          <p className="card-text">{this.state.classroom.description}</p>
          <p className="card-text">Hours {this.state.classroom.start_hour} to {this.state.classroom.end_hour}</p>
          <p className="card-text">Room {this.state.room.name} {this.state.room.room_number}</p>

        </div>
      </div>

    )
  }
}

export default withRouter(SectionContainer)

// <p className="card-text">Room: {this.state.classroom.room.name} {this.state.classroom.room.room_number}</p>
