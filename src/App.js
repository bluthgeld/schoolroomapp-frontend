import React, { Component } from 'react'
import Home from './Home.js'
import Nav from './Nav.js'
import CarerProfile from './CarerProfile.js'
import Login from './Login.js'
import Register from './Register.js'
import PublicAddressContainer from './PublicAddressContainer'
import AnnouncementContainer from './AnnouncementContainer'
import CreateAnnouncement from './CreateAnnouncement'
import EducatorProfile from './EducatorProfile'
import {Route} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {

      user: null

    }
  }



updateCurrentUser = (user) => {
  this.setState({user})
}



  render() {
    return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" render={() => <Login updateCurrentUser={this.updateCurrentUser} />} />
      <Route exact path="/educator" component={EducatorProfile} />
      <Route exact path="/carer/:username" render={routeProps => <CarerProfile currentUser={this.state.user} />} />
      <Route exact path="/profile/:username/pa" render={routeProps => <PublicAddressContainer currentUser={this.state.currentUser} />} />
      <Route exact path="/profile/:username/pa/send_announcement" render={routeProps => <CreateAnnouncement userData={this.state.userData} />} />
      <Route exact path="/profile/:username/pa/a/:id" component={AnnouncementContainer} />
    </div>
    )
  }
}

export default App;
