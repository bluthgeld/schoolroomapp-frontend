import React, { Component, Fragment } from 'react'
import Home from './Home.js'
import Nav from './Nav.js'
import Login from './Login.js'
import Register from './Register.js'
import EducatorLogin from './EducatorLogin.js'
import RegisterEducator from './RegisterEducator.js'
import CarerProfile from './CarerProfile.js'
import EditCarer from './EditCarer.js'
import EditEducator from './EditEducator.js'
import EducatorProfile from './EducatorProfile.js'
import PublicAddressContainer from './PublicAddressContainer.js'
import AnnouncementContainer from './AnnouncementContainer.js'
import CreateAnnouncement from './CreateAnnouncement.js'
import FourOhFour from './FourOhFour.js'
import SectionContainer from './SectionContainer.js'
import StudentContainer from './StudentContainer.js'
import {Route, Redirect, withRouter, Switch} from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {

      user: null

    }
  }


  componentDidMount(){
    //check to see if there is a jwt?
    //if there is, fetch to get the user asnd update the user state
    let token = localStorage.getItem("jwt")
    if(token){
      fetch("http://localhost:3000/users", {
        headers: {"Authentication": `Bearer ${token}`}
      })
      .then(res => res.json())
      .then(user => {

      	this.updateCurrentUser(user)
      })
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

    <div className="container-fluid">




    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register_educator" component={RegisterEducator} />



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

    <Route exact path="/educator_login" render={()=> {
        return (this.state.user ?
          <Redirect to={`/educator/${this.state.user.username}`} /> :
          <EducatorLogin updateCurrentUser={this.updateCurrentUser}/>)
          }
        }
      />


    <Route exact path="/educator/:username" render={() => {
      return (this.state.user ?
        <EducatorProfile currentUser={this.state.user} /> :
        <Redirect to={"/educator_login"} />)
        }
      }
    />

      <Route exact path="/carer/:username/pa" render={routeProps => <PublicAddressContainer currentUser={this.state.user} />} />
      <Route exact path="/carer/:username/pa/:id" render={routeProps => <AnnouncementContainer currentUser={this.state.user} />} />
      <Route exact path="/carer/:username/edit" render={routeProps => <EditCarer currentUser={this.state.user} updateCurrentUser={this.updateCurrentUser} />} />
      <Route exact path="/educator/:username/edit" render={routeProps => <EditEducator currentUser={this.state.user} updateCurrentUser={this.updateCurrentUser} />} />
      <Route exact path="/educator/:username/pa" render={routeProps => <PublicAddressContainer currentUser={this.state.user} />} />
      <Route exact path="/educator/:username/pa/:id" render={routeProps => <AnnouncementContainer currentUser={this.state.user} />} />
      <Route exact path="/section/:id" render={routeProps => <SectionContainer currentUser={this.state.user} /> } />
      <Route exact path="/student/:id" render={routeProps => <StudentContainer currentUser={this.state.user} /> } />

      <Route component={FourOhFour} />
    </Switch>
  </div>
  </Fragment>
    )
  }
}

export default withRouter(App);
