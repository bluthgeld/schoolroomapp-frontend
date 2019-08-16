import React, { Component } from 'react'
import Nav from './Nav.js'
import ProfileCard from './ProfileCard.js'
import StudentCard from './StudentCard.js'
import EducatorCard from './EducatorCard.js'
import CarerCard from './CarerCard.js'
import {withRouter, Route} from 'react-router-dom'

class CarerProfile extends Component {

  constructor() {
    super()
    this.state = {
      userData: [],
      studentData: [],
      educatorData: [],
      carerData: []
    }
  }


  render() {
    return (
    <div>
      This is a test
    </div>
    )
  }
}

export default withRouter(CarerProfile)
