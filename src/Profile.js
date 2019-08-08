import React, { Component } from 'react'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'

class Profile extends Component {

  constructor() {
    super()

    this.state = {
      userprofile: "userprofile"
    }
  }

  render() {
    return (
      <div>
        <h2>This is a profile</h2>
        <StudentCard />
        <EducatorCard />
        <CarerCard />

      </div>
    )
  }
}

export default Profile
