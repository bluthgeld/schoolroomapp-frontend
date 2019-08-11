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
      <Nav userId={this.state.userId} userName={this.state.userName} />
      <Profile />
    </div>

    )
  }

}

export default App;

// componentDidMount() {
// fetch('http://localhost:3000/carers/11')
// .then(res => res.json())
// .then(userData => {
//   this.setState({
//     userData: userData,
//     userName: userData.username,
//     userId: userData.id
//   })
// })
// }
