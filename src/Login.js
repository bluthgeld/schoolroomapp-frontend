import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Login extends Component {

  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }

  }


  handleChange = (event) => {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleLoginSubmit = (event) => {

    event.preventDefault();
    fetch('http://localhost:3000/login' , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,

      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.authenticated){
        this.props.updateCurrentUser(user.user)
        
      }else{
        alert("you have provided invalid credentials.")
      }
    })
  }



  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

}

export default withRouter(Login)
