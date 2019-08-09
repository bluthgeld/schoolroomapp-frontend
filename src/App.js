import React, { Component } from 'react'
import Nav from './Nav.js'
import Profile from './Profile.js'
import Login from './Login.js'
import Register from './Register.js'
import PublicAddress from './PublicAddress.js'
import {Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      userprofile: [],
      username: ""
    }
  }


  componentDidMount() {
  fetch('http://localhost:3000/carers/6')
  .then(res => res.json())
  .then(userData => {
    this.setState({
      userprofile: userData,
      username: userData.username
    })
  })
}


  render() {
    return (
    <div>
      <Nav />
      <div className="container-fluid">


        <Profile />


      </div>
    </div>

    )
  }

}

export default App;
