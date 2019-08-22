import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Register extends Component {

constructor() {
  super()

  this.state = {

    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    picture: "",

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
  fetch('http://localhost:3000/carers' , {
    method: 'POST',
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
    if (user.id) {
      alert("Your Registration has been submitted.  You will be contacted by your school administrator.")
      this.props.history.push('/login')

    } else {
      alert("You have made an error in your data entry.  Please correct and resubmit")
    }
  })
}



render() {
  return (

        <div className="container w-50 mx-auto px-4 py-4">
          <div className="w-25 mx-auto px-4 py-4">

            <img src={require('./university.png')} style={{ width: "200px"}}/>

          </div>

          <h2 className="mx-auto mb-4 mt-4">Register as a Parent/Carer</h2>


          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
              </div>
              <div className="form-group col-md-6">
                <label>Password</label>
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
          <button type="submit" className="btn btn-primary">Submit Registration</button>
        </form>
      </div>
      )
    }
  }

export default withRouter(Register)
