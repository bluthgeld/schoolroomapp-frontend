import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class CreateAnnouncement extends Component {

constructor(props) {
  super(props)

  this.state = {
    dropdown: [],
    student_id: "",
    subject: "",
    body: ""

  }
}


componentDidMount() {
fetch(`http://localhost:3000/ed_students/${this.props.currentUser.id}`)
.then(res => res.json())
.then(students => {
  console.log(students)
  this.studentList(students)
})
}

studentList = (data) => {
  let dropdown = []
  data.sections.forEach(section => {
    section.students.forEach(student => {
      let s = {}
      s.name = section.name
      s.id = student.id
      s.first_name = student.first_name
      s.last_name = student.last_name
      dropdown.push(s)
    })
  })
  this.setState({
    dropdown: dropdown,
  })
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
      initiator_id: this.props.currentUser.id,
      student_id: this.state.student_id,
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
      </div>
      <div className="form-group">
        <select className="form-control" name="student_id" value={this.state.student_id} onChange={this.handleChange}>
          <option selected value="">Select a Student</option>
          {this.state.dropdown.map(line => <option value={line.id}>{line.first_name} {line.last_name} - {line.name}</option>)}
        </select>
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

export default withRouter(CreateAnnouncement)

// <ReactQuill value={this.state.body} onChange={this.handleChangeBody} name="body" rows="10" />

//


// <input type="number" className="form-control" name="receiver_id" value={this.state.receiver_id} onChange={this.handleChange} placeholder="To:" />
