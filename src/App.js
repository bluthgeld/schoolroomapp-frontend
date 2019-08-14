import React, { Component } from 'react'
import Home from './Home.js'
import Nav from './Nav.js'
import Profile from './Profile.js'
import Login from './Login.js'
import Register from './Register.js'
import PublicAddressContainer from './PublicAddressContainer'
import CreateAnnouncement from './CreateAnnouncement'
import {Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: {},
    }
  }


  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }


  render() {
    return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile/:username" render={routeProps => <Profile currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />} />
      <Route exact path="/profile/:username/pa" component={PublicAddressContainer} />
      <Route exact path="/profile/:username/pa/send_announcement" component={CreateAnnouncement} />

    </div>

    )
  }

}

export default App;
