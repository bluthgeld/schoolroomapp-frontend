import React, { Component } from 'react'
import Nav from './Nav.js'
import Profile from './Profile.js'
import Login from './Login.js'
import Register from './Register.js'
import {Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()

    this.state = {
      user: "Rob"
    }

  }



  render() {
    return (
    <div>
      <Nav />
      <div className="container-fluid">

        <Login />
        <Register />
        <Profile />

      </div>
    </div>

    )
  }

}

export default App;
