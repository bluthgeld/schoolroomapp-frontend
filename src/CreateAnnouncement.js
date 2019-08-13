import React, { Component } from 'react'

class CreateAnnouncement extends Component {

constructor() {
  super()

  this.state = {

    receiver_id: "",
    subject: "",
    body: ""

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

handleSubmit = (event) => {

  event.preventDefault();
  fetch('http://localhost:3000/announcements' , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({
      initiator_id: 1,
      receiver_id: this.state.receiver_id,
      subject: this.state.subject,
      body: this.state.body
    })
  })
  .then(response => response.json())
  .then(message => {
    alert("Your Announcement Has Been Posted!")
  })
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <div class="form-group">
        <label for="annTo">To:</label>
        <input type="number" className="form-control" name="receiver_id" value={this.state.receiver_id} onChange={this.handleChange} placeholder="To:" />
      </div>
      <div class="form-group">
        <label for="annSubject">Subject:</label>
        <input type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Subject:" />
      </div>
      <div class="form-group">
        <label>Announcement</label>
        <textarea className="form-control" name="body" value={this.state.body} onChange={this.handleChange} rows="3" />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

}

export default CreateAnnouncement
