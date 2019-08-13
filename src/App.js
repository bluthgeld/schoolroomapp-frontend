import React, { Component } from 'react'
import Nav from './Nav.js'
import Profile from './Profile.js'
import Login from './Login.js'
import Register from './Register.js'
import PublicAddressContainer from './PublicAddressContainer.js'
import {Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      userData: [],
      userName: "",
      userId: 0
    }
  }





  render() {
    return (
    <div>
      <Register />
      <Login />

      <Nav userId={this.state.userId} userName={this.state.userName} />
      <Profile />
    </div>

    )
  }

}

export default App;
