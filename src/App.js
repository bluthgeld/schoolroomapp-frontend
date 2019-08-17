import React, { Component, Fragment } from 'react'
import Home from './Home.js'
import Nav from './Nav.js'
import CarerProfile from './CarerProfile.js'
import Login from './Login.js'
import Register from './Register.js'
import PublicAddressContainer from './PublicAddressContainer.js'
import AnnouncementContainer from './AnnouncementContainer.js'
import CreateAnnouncement from './CreateAnnouncement.js'
import EducatorProfile from './EducatorProfile.js'
import FourOhFour from './FourOhFour.js'
import {Route, Redirect, withRouter, Switch} from 'react-router-dom'


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
    <Fragment>

      {this.state.user ? (
          <Nav logged_in={this.state.user} updateCurrentUser={this.updateCurrentUser} />
      ) : (
        <div></div>
      )
    }
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />

        <Route exact path="/login" render={()=> {
          return (this.state.user ?
            <Redirect to={`/carer/${this.state.user.username}`} /> :
            <Login updateCurrentUser={this.updateCurrentUser}/>)
            }
          }
        />


      <Route exact path="/carer/:username" render={() => {
        return (this.state.user ?
          <CarerProfile currentUser={this.state.user} /> :
          <Redirect to={"/login"} />)
          }
        }
      />

      <Route exact path="/carer/:username/pa" render={routeProps => <PublicAddressContainer currentUser={this.state.user} />} />
      <Route exact path="/carer/:username/pa/:id" render={routeProps => <AnnouncementContainer currentUser={this.state.user} />} />
      <Route exact path="/educator" component={EducatorProfile} />
      <Route exact path="/educator/:username/pa/send_announcement" render={routeProps => <CreateAnnouncement currentUser={this.state.user} />} />
       <Route component={FourOhFour} />
    </Switch>
    </Fragment>
    )
  }
}

export default withRouter(App);
