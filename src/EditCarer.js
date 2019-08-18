import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class EditCarer extends Component {

constructor(props) {
  super(props)

  this.state = {

    username: props.currentUser.username || "",
    password: "",
    first_name: props.currentUser.first_name || "",
    last_name: props.currentUser.last_name || "",
    email: props.currentUser.email || "",
    phone: props.currentUser.phone || "",
    picture: props.currentUser.picture || "",

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

whatUp = (user) => {
  console.log(user)
}

handleSubmit = (event) => {

  event.preventDefault();
  fetch(`http://localhost:3000/carers/${this.props.currentUser.id}` , {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({
        carer: {
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          phone: this.state.phone,
          picture: this.state.picture,
        }
    })
  })
  .then(response => response.json())
  .then(user => {
    this.props.updateCurrentUser(user)
    this.whatUp(user)
    this.props.history.push(`/carer/${user.username}`)
    //need to put if an ifelse statement here with popups
  })
}



render() {
  return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
              </div>
              <div className="form-group col-md-6">
                <label>Confirm Existing Password to Make Any Change</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.handleChange} placeholder="First Name" />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.handleChange} placeholder="Last Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Phone Number</label>
              <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="+13015551212" />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email@url.com" />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Picture</label>
            <input type="text" className="form-control" name="picture" value={this.state.picture} onChange={this.handleChange} placeholder="URL for Your Photo" />
          </div>
          <button type="submit" className="btn btn-primary">Register Profile</button>
        </form>
      )
    }
  }

export default withRouter(EditCarer)
