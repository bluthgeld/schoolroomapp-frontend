import React, { Component } from 'react'

class ReplyTo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      body: ""
    }

  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault();
    fetch('http://localhost:3000/messages' , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify({
        announcement_id: 1,
        sender_id: 1,
        body: this.state.body
      })
    })
    .then(response => response.json())
    .then(message => this.getMessage(message))

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Reply to this Announcement</label>
          <textarea class="form-control" value={this.state.body} onChange={this.handleChange} rows="3" />
        </div>
        <button type="submit" class="btn btn-primary">Reply</button>
      </form>
    )
  }

}

export default ReplyTo
